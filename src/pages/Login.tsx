import React, { useEffect, useState } from "react";
// import { MyContext } from "../App";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const { id, setId } = useContext(MyContext);

  const handleLogin = () => {
    fetch(`http://localhost:8080/signin`, {
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
        localStorage.setItem("userId", data.id)
        window.location.reload();
        console.log("Server response:", data);
        
      })
      .catch((error) => {
        console.error("Fetch error", error);
      });
  };

  

  return (
    <>
      <div className="relative h-screen flex items-center justify-center w-full ">
        <div className="relative md:w-1/2 sm:w-full flex items-center justify-center">
          <div className=" bg-white p-8 shadow rounded-3xl md:w-1/2 sm:full ">
            <div className="space-x-5 ">
              
            </div>
            <div className="mt-5">
              <label
                className=" text-sm text-gray-600 pb-1 block"
                htmlFor="login"
                >E-mail
                
                </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                className=" text-sm text-gray-600 pb-1 block"
                htmlFor="password"
                >Password</label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          
            <div className="mt-5">
              <button onClick={handleLogin}
                className="py-2 px-4 bg-blue text-white w-full  rounded-lg"
                type="submit">
                Log in
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <Link to="/signup">
                <p className="text-xs text-gray-500 uppercase dark:text-gray-400 ">
                or sign up
                </p>
              </Link>
              <span className="w-1/5 border-b dark:border-gray-400 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

{/* <div className="box-container">
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
    </div> */}
