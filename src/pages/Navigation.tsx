import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../App";

const Navigation = () => {
  const navigate = useNavigate()
  const {setId} = useContext(MyContext);
  const signOut = () => {
    setId(0)
    navigate("/")
  }
  
  return (
     <div className="navigation">
      <h1 className="navigation__logo" onClick={() => navigate("/home")}>Logo</h1>
      <ul className="navigation__list">
        <li>
          <Link className="navigation__text" to="/myposts">My Posts</Link>
        </li>
        <li>
          <Link className="navigation__text" to="/create">Create</Link>
        </li>
      </ul>
     <button onClick={() => signOut()}>Signout</button>
    </div>
  );
};

export default Navigation;
