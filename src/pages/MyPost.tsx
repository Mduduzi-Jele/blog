// @ts-nocheck
import { useEffect, useState } from "react";

import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Navi from "./Navi";

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
  const userId = localStorage.getItem("userId")
  const navigate = useNavigate();
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/user/${userId}/posts`);
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
    fetch(`http://localhost:8080/post/${postId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Post deleted successfully
          posts?.splice(index, 1);
          console.log(`Post with ID ${postId} has been deleted.`);
          navigate("/myposts")
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
      <Navbar />
      <div className="mypost mt-12 w-full">
        <div className="mypost__wrapper ml-4 md:ml-8 mr-4 md:mr-8 flex justify-center items-center">
          <ul className="w-full md:flex-wrap justify-center flex flex-col md:flex-row gap-8">
            {posts?.map((post, index) => (
              <li className="mypost__item bg-card md:w-[400px] w-fit md:w-fit flex items-center rounded-lg" key={index}>
                <div>
                  <img className="mypost__item__image w-full p-3" src={`http://localhost:8080/images/${post.id}`} alt="Uploaded Image" />
                  <div className="mypost__metadata p-3">
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                    <div className="mypost__metadata__details">
                      <p>Date: {post.dataTime}</p>
                      <p>Name: {post.user.name}</p>
                    </div>
                    <div className="mypost__metadata__icons flex gap-3 mt-4 mb-6 flex-col">
                      <button className="text-base bg-red p-3" onClick={() => deletePost(post.id, index)}>Delete</button>
                      <button className="text-base bg-edit p-3" onClick={() => navigate("/edit", {
                        state: {
                          id: post.id,
                          title: post.title,
                          description: post.description
                        },
                      })}>Edit</button>
                    </div>
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
