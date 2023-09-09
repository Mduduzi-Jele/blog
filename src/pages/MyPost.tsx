import { useEffect, useState, useContext } from "react";
import { MyContext } from "../App";

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
}

export const MyPost = () => {
  const [user, setUser] = useState<User | null>(null);
  const { id } = useContext(MyContext);

  const loadFilteredUserFromLocalStorage = (filterKey: number) => {
    const filteredUserJSON = localStorage.getItem(filterKey);

    if (filteredUserJSON !== null) {
      const filteredUser: User = JSON.parse(filteredUserJSON);
      setUser(filteredUser);
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    const filterKey = id;
    loadFilteredUserFromLocalStorage(filterKey);
  }, [id]);

  return (
    <div className="App">
      {user ? (
        <div>
          <h1>User Information</h1>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <h2>Posts</h2>
          <ul>
            {user.myPosts.map((post, index) => (
              <li key={index}>
                <h3>{post.title}</h3>
                <p>{post.message}</p>
                <p>Date: {post.dateTime}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>You have no post yet.</p>
      )}
    </div>
  );
};
