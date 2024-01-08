import React, { useState } from "react";
// import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const { id, setId } = useContext(MyContext);

  const handleLogin = () => {
    fetch(`http://blog-api-production-f2cd.up.railway.app/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email, password}),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        sessionStorage.setItem("userId", data.id)
        console.log("Server response:", data);
        navigate("/home")
      })
      .catch((error) => {
        console.error("Fetch error", error);
      });
  };

  return (
    <div className="box-container">
      <div className="header-text">
        <h1>Log-In</h1>
        <div className="line"></div>
      </div>
      <div className="form-container">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>{" "}
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>{" "}
        <br />
        <br />
        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
