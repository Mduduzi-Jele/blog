import React, { useContext } from "react";
import { MyContext } from "../App";
import Navigation from "./Navigation";

const Home = () => {
  const id = useContext(MyContext);

  return (
    <div>
      <Navigation />
    </div>
  );
};

export default Home;
