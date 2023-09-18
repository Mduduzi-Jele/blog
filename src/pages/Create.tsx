import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";

interface MyPostProps {}

interface Post {
  title: string;
  message: string;
  dateTime: Date;
  image?: string;
}

const Create: React.FC<MyPostProps> = () => {
  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [image, setImage] = useState<string | undefined>(undefined);

  const { id } = useContext(MyContext);
  const navigate = useNavigate();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const validImageTypes = ["image/jpeg", "image/png", "image/gif"];

      if (validImageTypes.includes(file.type)) {
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (e.target && e.target.result) {
            const dataUrl = e.target.result as string;
            setImage(dataUrl);
          }
        };

        reader.readAsDataURL(file);
      } else {
        alert("Invalid image format. Please select a JPG, PNG, or GIF file.");
        event.target.value = null;
      }
    }
  };

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

    const newPost: Post = { title, message, dateTime: new Date() };

    if (image) {
      newPost.image = image;
    }

    existingData.myPosts.push(newPost);

    const updatedData = existingData;

    localStorage.setItem(id, JSON.stringify(updatedData));

    console.log("Data posted successfully!");
    setTitle("");
    setMessage("");
    setImage(undefined);
    navigate("/myposts");

    console.log("Submit button clicked");
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
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Selected" />}
      <button onClick={handlePostData}>Submit</button>
    </div>
  );
};

export default Create;
