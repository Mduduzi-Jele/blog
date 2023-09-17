import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";
import Navigation from "./Navigation";

interface MyPostProps {}

interface Post {
  title: string;
  description: string;
  dateTime: Date;
}

const Create: React.FC<MyPostProps> = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

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

    const newPost: Post = { title, description, dateTime: new Date() };

    existingData.myPosts.push(newPost);

    const updatedData = existingData;

    localStorage.setItem(id, JSON.stringify(updatedData));

    console.log("Data posted successfully!");
    setTitle("");
    setDescription("");
    navigate("/myposts");
  };

  return (

    <>
    <Navigation />
    <div className="create-container">
      <h1>Create Post</h1>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="anything"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Message"
            className="anything"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button onClick={handlePostData}>Submit</button>
      </form>
    </div>
    </>
  );
};

export default Create;
