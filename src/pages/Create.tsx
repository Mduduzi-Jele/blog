import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";

interface MyPostProps {}

interface Post {
  title: string;
  message: string;
  dateTime: Date;
}

const Create: React.FC<MyPostProps> = () => {
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  
  const { id } = useContext(MyContext);
  const navigate = useNavigate();

  const handlePostData = () => {
    const existingDataString = localStorage.getItem(id);
    const existingData: {
      firstName: string;
      password: string;
      myPosts: Post[];
    } = existingDataString
      ? JSON.parse(existingDataString)
      : {
          firstName: "",
          password: "",
          myPosts: [],
        };

    const newPost: Post = { title, message, dateTime: new Date };

    existingData.myPosts.push(newPost);

    const updatedData = existingData

    localStorage.setItem(id, JSON.stringify(updatedData));

    console.log("Data posted successfully!");
    setTitle("");
    setMessage("");
    navigate("/myposts");
  };

  return (
    <div>
      <h1>My Post</h1>
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
      <button onClick={handlePostData}>Submit</button>
    </div>
  );
};

export default Create;
