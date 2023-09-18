import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";

interface Comment {
  name: string;
  dayeTime: Date;
  message: string;
}

const Readmore = () => {
  const [comment, setComment] = useState("");
  const [showComment, setshowComment] = useState(false);

  const location = useLocation();
  const { state } = location;

  const { title, description, id, postId, name } = state;
  const saveComment = () => {
    let user = JSON.parse(localStorage.getItem(id));
    let myComment = { name, message: comment, dayeTime: new Date() };
    user.myPosts[postId].comment.push(myComment);
    localStorage.setItem(id, JSON.stringify({ ...user }));
    setshowComment(false)
  };
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button
        onClick={() => {
          if (showComment !== true) {
            setshowComment(true);
          } else {
            setshowComment(false);
          }
        }}
      >
        Comment
      </button>
      {showComment ? (
        <div>
          <input
            value={comment}
            type="text"
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
          <button onClick={() => saveComment()}>Save</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Readmore;
