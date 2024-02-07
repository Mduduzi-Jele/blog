import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

    fetch("http://localhost:8080/user", {
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

    <>
      <div className="relative h-screen flex items-center justify-center w-full ">
        <div className="relative md:w-1/2 sm:w-full flex items-center justify-center">
          <div className=" bg-white p-8 shadow rounded-3xl md:w-1/2 sm:full ">
            <div className="space-x-5 ">
              
            </div>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit} className="p-0">
              <div className="mt-5 w-full">
                <label
                  className=" text-sm text-gray-600 pb-1 block"
                  htmlFor="Name"
                  >Name
                  
                  </label>
                <input
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  type="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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
              <button
                className="py-2 px-4 bg-blue text-white w-full  rounded-lg"
                type="submit">
               Signup
              </button>
            </div>
            </form>
           
          </div>
        </div>
      </div>
    </>
    
  );
}

export default SignUp;