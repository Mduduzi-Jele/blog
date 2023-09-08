import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface MyPostProps {}

interface Post {
  title: string;
  message: string;
  dateTime: string;
}

const Create: React.FC<MyPostProps> = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [dateTime, setDateTime] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    const getCurrentDateTime = (): string => {
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
    const existingDataString = localStorage.getItem("data");
    const existingData: {
      firstName: string;
      password: string;
      myPost: Post[];
    } = existingDataString
      ? JSON.parse(existingDataString)
      : {
          firstName: "",
          password: "",
          myPost: [],
        };

    const newPost: Post = { title, message, dateTime };

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
        onChange={(e) => setDateTime(e.target.value)}
      />
      <button onClick={handlePostData}>Submit</button>
    </div>
  );
};

export default Create;
