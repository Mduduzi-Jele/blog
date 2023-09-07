import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./pages/Home";
import { MyPost } from "./pages/MyPost";

export const MyContext = createContext({});

function App() {
  const [id, setId] = useState(0);
  return (
    <MyContext.Provider value={{ id, setId }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myposts" element={< MyPost/>} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
