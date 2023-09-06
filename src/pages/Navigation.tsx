import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../App";

const Navigation = () => {
  const id = useContext(MyContext);
  
  return (
    <div className="navigation">
      <h1>Logo</h1>
      <ul>
        <li>
          <Link to="/myposts">My Posts</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
