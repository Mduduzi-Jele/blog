import { useState, useEffect } from "react";
import Rating from "./Rating";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { MyContext } from "../App";

export interface Post {
  title: string;
  description: string;
  dateTime: Date;
  userId: string;
  postId: string;
  name: string;
}

const Posts = () => {
  const [averageRating, setAverageRating] = useState<number | null>(null);
  const [userRating, setUserRating] = useState<number>(0);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [filterDuration, setFilterDuration] = useState<string>("all");
  const { id, setId } = useContext(MyContext);

  const navigate = useNavigate();

  const handleRatingChange = (newRating: number) => {
    setAverageRating(newRating);
  };

  useEffect(() => {
    const localstoragekeys = Object.keys(localStorage);
    const allPosts: Post[] = [];

    const fetchPosts = () => {
      const myUser = JSON.parse(localStorage.getItem(id));
      console.log(myUser.name);
      localstoragekeys.forEach((userId) => {
        const user = JSON.parse(localStorage.getItem(userId));
        if (user && user.myPosts) {
          user.myPosts.forEach((post: Post, index: number) => {
            const mypost = {
              ...post,
              userId,
              postId: index,
              name: myUser.name,
            };
            console.log(mypost);
            allPosts.push(mypost);
          });
        }
      });
    };

    fetchPosts();

    const now = new Date();
    const oneWeekAgo = new Date(now);
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const oneMonthAgo = new Date(now);
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const threeMonthsAgo = new Date(now);
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

    let filtered: Post[] = [];

    switch (filterDuration) {
      case "weekly":
        filtered = allPosts.filter((post) => {
          const postDate = new Date(post.dateTime);
          return postDate >= oneWeekAgo;
        });
        break;
      case "1month":
        filtered = allPosts.filter((post) => {
          const postDate = new Date(post.dateTime);
          return postDate >= oneMonthAgo;
        });
        break;
      case "3months":
        filtered = allPosts.filter((post) => {
          const postDate = new Date(post.dateTime);
          return postDate >= threeMonthsAgo;
        });
        break;
      case "all":
      default:
        filtered = allPosts;
        break;
    }

    const sortedArray = filtered.sort((a, b) => {
      if (a.dateTime && b.dateTime) {
        return new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime();
      } else {
        return 0;
      }
    });

    setFilteredPosts(sortedArray);
  }, [filterDuration]);

  return (
    <div>
      <div className="filter__search">
        <div className="filter">
          <button onClick={() => setFilterDuration("all")}>All</button>
          <button onClick={() => setFilterDuration("weekly")}>Weekly</button>
          <button onClick={() => setFilterDuration("1month")}>1 Month</button>
          <button onClick={() => setFilterDuration("3months")}>3 Months</button>
        </div>
        <Search
          filteredPosts={filteredPosts}
          setFilteredPosts={setFilteredPosts}
        />
      </div>
      {filteredPosts.length > 0 ? (
        <div>
          {filteredPosts.map((post, index) => {
            let description = post.description.split(" ");
            description = description.slice(0, 15);
            const desc: string = description.join(" ");
            return (
              <div key={index}>
                <p>Title: {post.title}</p>
                <p>Message: {`${desc}...`}</p>
                <button
                  onClick={() => {
                    navigate("/Readmore", {
                      state: {
                        id: post.userId,
                        title: post.title,
                        description: post.description,
                        postId: post.postId,
                        name: post.name,
                      },
                    });
                  }}
                >
                  Read More
                </button>
                <div>
                  <Rating
                    initialRating={userRating}
                    onRatingChange={handleRatingChange}
                  />
                  {averageRating !== null && (
                    <p>Average Rating: {averageRating.toFixed(2)}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No posts added</div>
      )}
    </div>
  );
};

export default Posts;
