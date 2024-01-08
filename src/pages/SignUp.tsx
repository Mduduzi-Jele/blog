import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
    };

    fetch("http://blog-api-production-f2cd.up.railway.app/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
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
      })
      .catch((error) => {
        console.error("Fetch error", error);
      });

    setName("");
    setEmail("");
    setPassword("");
    navigate("/home");
  };

  return (
    <div className="box-container">
      <div className="header-text">
        <h1>Sign-Up</h1>
        <div className="line"></div>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="text-area"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>{" "}
          <br />
          <br />
          <input
            type="email"
            className="text-area"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>{" "}
          <br />
          <br />
          <input
            type="password"
            className="text-area"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>{" "}
          <br />
          <br />
          <button className="btnSignUp">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
