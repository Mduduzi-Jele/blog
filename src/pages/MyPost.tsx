// @ts-nocheck
import { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  description: string;
  dataTime: string;
  user: User;
  likes: number;
  views: number;
}

export const MyPost = () => {
  const [posts, setPosts] = useState<Post[] | null>([]);
  const userId = sessionStorage.getItem("userId")
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`//blog-api-production-f2cd.up.railway.app/user/${userId}/posts`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        console.log(jsonData);
        setPosts(jsonData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [userId]);

  const deletePost = (postId, index) => {
    fetch(`//blog-api-production-f2cd.up.railway.app/post/${postId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Post deleted successfully
          posts?.splice(index, 1);
          console.log(`Post with ID ${postId} has been deleted.`);
        } else {
          // Handle errors, e.g., if the post doesn't exist
          console.error("Error deleting the post.");
        }
      })
      .catch((error) => {
        // Handle network or other errors
        console.error("Fetch error:", error);
      });
  };

  return (
    <>
      <Navigation />
      <div className="mypost">
        <div className="mypost__wrapper">
          <ul className="mypost__list">
            {posts?.map((post, index) => (
              <li className="mypost__item" key={index}>
                <img className="mypost__item__image" src={`//blog-api-production-f2cd.up.railway.app/images/${post.id}`} alt="Uploaded Image" />
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="mypost__metadata">
                  <div className="mypost__metadata__details">
                    <p>Date: {post.dataTime}</p>
                    <p>Name: {post.user.name}</p>
                  </div>
                  <div className="mypost__metadata__icons">
                    <AiOutlineDelete onClick={() => deletePost(post.id, index)} />
                    <AiOutlineEdit onClick={() => navigate("/edit", {
                        state: {
                          id: post.id,
                          title: post.title,
                          description: post.description
                        },
                      })} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
