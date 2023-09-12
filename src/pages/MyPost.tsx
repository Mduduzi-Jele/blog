import{ useEffect, useState , useContext } from 'react';
import Navigation from './Navigation';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai'
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

export const MyPost= () => {
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
  
  useEffect(() => {
    const filterKey = id;
    loadFilteredUserFromLocalStorage(filterKey);
  }, [id]);

  return (
    <>
    
    <Navigation/>
    <div className="mypost">
      {user ? (
        <div className='mypost__wrapper'>
          {/* <h1>User Information</h1>
          
          <p>Email: {user.email}</p>
          <h2>Posts</h2> */}
          <ul className='mypost__list'>
            {user.myPosts.map((post, index) => (
              <li className='mypost__item' key={index}>
                <h3>{post.title}</h3>
                <p>{post.message}</p>
                <div className='mypost__metadata'>
                    <div className='mypost__metadata__details'>
                    <p>Date: {post.dateTime}</p>
                    <p>Name: {user.name}</p>
                    </div>
                    <div className='mypost__metadata__icons'>
                      <AiOutlineDelete />
                      <AiOutlineEdit/>
                    </div>
                </div>
                
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>You have no post yet.</p>
      )}
    </div></>
  );
};


