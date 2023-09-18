import { useEffect, useState, useContext } from "react";
import Navigation from "./Navigation";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MyContext } from "../App";
import Tags from "./Tags";

interface User {
  name: string;
  password: string;
  email: string;
  myPosts: Post[];
}

interface Post {
  title: string;
  message: string;
  dateTime: string;
  image?: string;
}

export const MyPost = () => {
  const [user, setUser] = useState<User | null>(null);
  const { id } = useContext(MyContext);

  const loadFilteredUserFromLocalStorage = (filterKey: string) => {
    const filteredUserJSON = localStorage.getItem(filterKey);

    if (filteredUserJSON !== null) {
      const filteredUser: User = JSON.parse(filteredUserJSON);
      setUser(filteredUser);
    } else {
      setUser(null);
    }
  };

  const deletePost = (index: number) => {
    if (user) {
      const updatedPosts = [...user.myPosts];
      updatedPosts.splice(index, 1);
      const updatedUser = { ...user, myPosts: updatedPosts };
      setUser(updatedUser);
      localStorage.setItem(id, JSON.stringify(updatedUser));
    }
  };

  useEffect(() => {
    const filterKey = id;
    loadFilteredUserFromLocalStorage(filterKey);
  }, [id]);

  return (
    <>
      <Navigation />
      <div className="mypost">
        {user ? (
          <div className="mypost__wrapper">
            <Tags
              posts={user.myPosts}
              onCategoryChange={(category) => setSelectedCategory(category)}
            />
            <ul className="mypost__list">
              {user.myPosts.map((post, index) => (
                <li className="mypost__item" key={index}>
                  <div className="mypost__image-container">
                    {post.image && (
                      <img
                        src={post.image}
                        alt="Post Image"
                        className="mypost__image"
                      />
                    )}
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.message}</p>
                  <div className="mypost__metadata">
                    <div className="mypost__metadata__details">
                      <p>Date: {post.dateTime}</p>
                      <p>Name: {user.name}</p>
                    </div>
                    <div className="mypost__metadata__icons">
                      <AiOutlineDelete onClick={() => deletePost(index)} />
                      <AiOutlineEdit />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>You have no posts yet.</p>
        )}
      </div>
    </>
  );
};

export default MyPost;
