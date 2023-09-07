import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyPost = () => {
  const [firstName, setFirstName] = useState("");
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [dateTime, setDateTime] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getCurrentDateTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    };

    setDateTime(getCurrentDateTime());
  }, []);

  const handlePostData = () => {
    const existingData = JSON.parse(localStorage.getItem("data")) || {
      firstName: "",
      password: "",
      myPost: [],
    };

    const newPost = { title, message, dateTime };

    existingData.myPost.push(newPost);

    const updatedData = {
      firstName,
      password,
      myPost: existingData.myPost,
    };

    localStorage.setItem("data", JSON.stringify(updatedData));

    console.log("Data posted successfully!");

    navigate("/blog");

    setFirstName("");
    setPassword("");
    setTitle("");
    setMessage("");
    setDateTime("");
  };

  return (
    <div>
      <h1>My Post</h1>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Date"
        value={dateTime}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handlePostData}>Submit</button>
    </div>
  );
};

export default MyPost;
