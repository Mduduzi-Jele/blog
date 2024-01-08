import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import { useLocation } from "react-router-dom";

interface MyPostProps {}

interface Post {
  title: string;
  description: string;
}

const Update: React.FC<MyPostProps> = () => {
  const location = useLocation();
  const { state } = location;

  const {id, title, description} = state;
  const [sTitle, setStitle] = useState<string>(title);
  const [sDescription, setSDescription] = useState<string>(description);

  const navigate = useNavigate();

  const handlePostData = (e) => {
    e.preventDefault();
    const newPost: Post = {
      title: sTitle,
      description: sDescription
    };

    fetch(`http://blog-api-production-f2cd.up.railway.app/post/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
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
    setStitle("");
    setSDescription("");
    navigate("/myposts");
  };

  return (
    <>
      <Navigation />
      <div className="create-container">
        <h1>Update Post</h1>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="anything"
              placeholder="Title"
              value={sTitle}
              onChange={(e) => setStitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Message"
              className="anything"
              value={sDescription}
              onChange={(e) => setSDescription(e.target.value)}
            ></textarea>
          </div>
          <button onClick={(e) => handlePostData(e)}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Update;
