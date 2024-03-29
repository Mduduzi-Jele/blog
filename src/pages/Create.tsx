// @ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import Navi from "./Navi";
import Navbar from "./Navbar";

interface MyPostProps {}

interface Post {
  title: string;
  description: string;
  dataTime: Date;
  views: number;
  likes: number;
  imageUrl: string;
}

const Create: React.FC<MyPostProps> = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dataTime] = useState<Date>(new Date());
  const [selectedFile, setSelectedFile] = useState<Blob>("");

  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handlePostData = (e) => {
    e.preventDefault();

    if (selectedFile) {
      const newPost = new FormData();
      newPost.append("imageUrl", selectedFile);
      newPost.append("title", title);
      newPost.append("description", description);
      newPost.append("dataTime", dataTime);
      newPost.append('views', 0);
      newPost.append('likes', 0);

      fetch(`http://localhost:8080/user/${userId}/post`, {
        method: "POST",
        body: newPost,
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Network response was not ok");
          }
        })
        .then((data) => {
          console.log("Server response:", data);
        })
        .catch((error) => {
          console.error("Fetch error", error);
        });

      console.log("Data posted successfully!");
      setTitle("");
      setDescription("");
      navigate("/home");
    } else {
      console.error("No file selected for upload");
    }
  };

  return (
    <>
      <Navbar />
      <div className="create-container ml-[20px] mr-[20px]">
        <h1 className="text-2xl mb-12 text-white">Create Post</h1>
        <form className="bg-card">
          <div>
            <input type="file" onChange={handleFileChange} />
          </div>
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
          <button onClick={(e) => handlePostData(e)}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Create;
