import{ useEffect, useState } from 'react';


interface User {
  name: string;
  password: string;
  email: string;
  mypost: Post[];
}

interface Post {
  title: string;
  body: string;
  date: string;
}

export const MyPost= () => {

  const [user, setUser] = useState<User | null>(null);

  const loadFilteredUserFromLocalStorage = (filterKey: string) => {
    const filteredUserJSON = localStorage.getItem(filterKey);

    if (filteredUserJSON !== null) {
      const filteredUser: User = JSON.parse(filteredUserJSON);
      setUser(filteredUser);
    } else {
      setUser(null);
    }
  };
  
  useEffect(() => {
    const filterKey = '655';
    loadFilteredUserFromLocalStorage(filterKey);
  }, []);

  return (
    <div className="App">
      {user ? (
        <div>
          <h1>User Information</h1>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <h2>Posts</h2>
          <ul>
            {user.mypost.map((post, index) => (
              <li key={index}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <p>Date: {post.date}</p>
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


