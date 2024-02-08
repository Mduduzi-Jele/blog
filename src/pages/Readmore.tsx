import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navi from "./Navi";
import Navbar from "./Navbar";
import { setuid } from "process";

interface Comment {
  dateTime: Date;
  description: string;
  likes: number;
}

const Readmore = () => {
  const [comment, setComment] = useState("");
  const [showComment, setshowComment] = useState(false);

  const location = useLocation();
  const { state } = location;

  const { title, description, id, dateTime, likes } = state;

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/post/${id}/comments`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const comments = await response.json();
        console.log(comments);
        setComments(comments);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [id]);

  const saveComment = () => {
    const newComment: Comment = {
      description: comment,
      dateTime: new Date(),
      likes: 0,
    };

    if (comment == ""){
      return "Please enter a comment"

    }else{
    fetch(`http://localhost:8080/post/${id}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
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
    }
  };


  const like = (id: number) => {
    const addLike = {
      likes: likes + 1
    };

    fetch(`http://localhost:8080/like/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addLike),
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
  };

  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center">
      <div className="">
        <div className="mt-12 p-3 bg-card md:w-30 rounded-lg">
          <img className="mypost__item__image rounded-lg" src={`http://localhost:8080/images/${id}`} 
          alt="Uploaded Image" />
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{dateTime}</p>
          <div className="flex gap-4 text-white mt-5">
            <button className="p-2 bg-background" onClick={() => like(id)}>like</button>
            <button className="p-2  bg-background"
              onClick={() => {
                if (showComment !== true) {
                  setshowComment(true);
                } else {
                  setshowComment(false);
                }
              }}
            > Comment
            </button>
        
          {showComment ? (
            <div className="commentbox">
              <input className="commentInput"
                value={comment}
                type="text"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              />
              <button className="btn-save" onClick={() => saveComment()}>Save</button>
            </div>
          ) : (
            ""
          )}
          </div>
          <div className="comments-display">
            {
              comments.map(comment => (
                <div>
                  <p>{comment.dateTime}</p>
                  <h1>{comment.description}</h1>
                </div>
              ))
            }            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Readmore;