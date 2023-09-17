import React from "react";
import { Post } from "./Home";

interface SearchProps {
  searchedPosts: Post[];
}

const SearchedPosts: React.FC<SearchProps> = ({ searchedPosts }) => {
  return (
    <div>
      {searchedPosts.map((searchedPost, index) => (
        <div key={index}>
          <p>Title: {searchedPost.title}</p>
          <p>Message: {searchedPost.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchedPosts;
