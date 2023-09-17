import Navigation from "./Navigation";
import Posts from "./Posts";
import Search from "./Search";
import { useState } from "react";
import SearchedPosts from "./SearchedPosts";
// import { users } from "./Database";

export interface Post {
  title: string;
  description: string;
  dateTime: Date;
  views: number;
  ratings: number;
  image: File;
  tag: string;
  comment: Comment[];
}

export interface Comment {
  name: string;
  dateTime: Date;
  message: string;
}



// function storeUsersInLocalStorage() {
//   try {
//     // Iterate through the keys of the users object
//     for (const userId in users) {
//       if (users.hasOwnProperty(userId)) {
//         const userData = users[userId];

//         // Convert the user data to a JSON string
//         const userJSON = JSON.stringify(userData);

//         // Store the JSON string in localStorage under a key that includes the user ID
//         localStorage.setItem(userId, userJSON);
//       }
//     }

//     console.log("Users data stored in localStorage successfully.");
//   } catch (error) {
//     console.error("Error storing users data in localStorage:", error);
//   }
// }

// // Call the function to store users in localStorage
// storeUsersInLocalStorage();

const Home = () => {
  const [searchedPosts, setSearchedPosts] = useState<Post[]>([]);
  return (
    <div>
      <Navigation />
      <div>
        <Search setSearchedPosts={setSearchedPosts} />
      </div>
      <Posts searchedPosts={searchedPosts} />
    </div>
  );
};

export default Home;
