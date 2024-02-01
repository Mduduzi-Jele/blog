import { useEffect } from "react";
import Navbar from "./Navbar";
import Navigation from "./Navigation";
import Posts from "./Posts";
import { useNavigate } from "react-router-dom";

export interface Comment {
  name: string;
  dateTime: Date;
  message: string;
}

const Home = () => {
  
  return (
    <div>
      <Navbar />
      <Posts />
    </div>
  );
};

export default Home;
