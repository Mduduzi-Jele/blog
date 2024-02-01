import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { MyPost } from "./pages/MyPost";
import Create from "./pages/Create";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import Footer from "./pages/Footer";
import DisplayComment from "./pages/DisplayComment";
import Readmore from "./pages/Readmore";
import Update from "./pages/Update";

export const MyContext = createContext({});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in on component mount
    const storedUser = localStorage.getItem("userId");
    if (storedUser) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <MyContext.Provider value={{ loggedIn, setLoggedIn }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={loggedIn ? <Navigate to="/home" /> : <Login />}
          />
          <Route path="/home" element={<Home />} />
          <Route
            path="/create"
            element={
              loggedIn ? (
                <Create />
              ) : (
                // UseNavigate hook directly within the component
                <Navigate to="/" replace={true} />
              )
            }
          />
          <Route
            path="/myposts"
            element={
              loggedIn ? (
                <MyPost />
              ) : (
                // UseNavigate hook directly within the component
                <Navigate to="/" replace={true} />
              )
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/displaycomment"
            element={
              loggedIn ? (
                <DisplayComment />
              ) : (
                // UseNavigate hook directly within the component
                <Navigate to="/" replace={true} />
              )
            }
          />
          <Route path="/footer" element={<Footer />} />
          <Route path="/readmore" element={<Readmore />} />
          <Route path="/edit" element={<Update />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
