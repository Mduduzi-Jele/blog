import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { MyPost } from "./pages/MyPost";
import SignUp from "./pages/SignUp";

export const MyContext = createContext({});

function App() {
  const [id, setId] = useState(0);
  return (
    <MyContext.Provider value={{ id, setId }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/myposts" element={< MyPost/>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
