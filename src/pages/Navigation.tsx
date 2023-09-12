import { Link } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../App";

const Navigation = () => {
  const id = useContext(MyContext);
  
  return (
    <>
     <div className="navigation">
      <h1 className="navigation__logo">Logo</h1>
      <ul className="navigation__list">
        <li>
          <Link className="navigation__text" to="/myposts">My Posts</Link>
        </li>
        <li>
          <Link className="navigation__text" to="/create">Create</Link>
        </li>
      </ul>
     
    </div>
    <hr/>
    </>
  );
};

export default Navigation;
