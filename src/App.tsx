import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { MyPost } from "./pages/MyPost";
import Create from "./pages/Create";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import Footer from "./pages/Footer";
import DisplayComment from "./pages/DisplayComment";
import Readmore from "./pages/Readmore";
import { Edit } from "./pages/edit";


export const MyContext = createContext({});

function App() {
  const [id, setId] = useState(0);
  return (
    <MyContext.Provider value={{ id, setId }}>
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/myposts" element={< MyPost/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="displaycomment" element ={<DisplayComment />} />
          <Route path="footer" element = {<Footer />}/>
          <Route path="/Readmore" element={<Readmore/>}/>
          <Route path="/edit" element={<Edit/>}/>
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
