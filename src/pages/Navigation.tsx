import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate()
  
  return (
    <>
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
     
    </div>
    <hr/>
    </>
  );
};

export default Navigation;
