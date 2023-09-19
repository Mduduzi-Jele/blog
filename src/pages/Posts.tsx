import React, { useState, useEffect } from 'react';
import Rating from './Rating';
import Search from './Search';

export interface Post {
  title: string;
  description: string;
  dateTime: Date;
  views: number; // Add a views property
}

const Posts = () => {
  const [averageRating, setAverageRating] = useState<number | null>(null);
  const [userRating, setUserRating] = useState<number>(0);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [filterDuration, setFilterDuration] = useState<string>('all');

  const handleRatingChange = (newRating: number) => {
    setAverageRating(newRating);
  };

  useEffect(() => {
    const localstoragekeys = Object.keys(localStorage);
    const allPosts: Post[] = [];

    const fetchPosts = () => {
      localstoragekeys.forEach((userId) => {
        const user = JSON.parse(localStorage.getItem(userId));
        if (user && user.myPosts) {
          user.myPosts.forEach((post: Post) => {
            allPosts.push(post);
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
      case 'weekly':
        filtered = allPosts.filter((post) => {
          const postDate = new Date(post.dateTime);
          return postDate >= oneWeekAgo;
        });
        break;
      case '1month':
        filtered = allPosts.filter((post) => {
          const postDate = new Date(post.dateTime);
          return postDate >= oneMonthAgo;
        });
        break;
      case '3months':
        filtered = allPosts.filter((post) => {
          const postDate = new Date(post.dateTime);
          return postDate >= threeMonthsAgo;
        });
        break;
      case 'all':
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

  const handleViewClick = (postIndex: number) => {
    // Create a copy of the filtered posts array
    const updatedPosts = [...filteredPosts];
  
    // Increment the views count for the clicked post
    updatedPosts[postIndex].views = (updatedPosts[postIndex].views || 0) + 1;
  
    // Update the state with the modified posts array
    setFilteredPosts(updatedPosts);
  };
  

  return (
    <div>
      <div className="filter__search">
        <div className="filter">
          <button onClick={() => setFilterDuration('all')}>All</button>
          <button onClick={() => setFilterDuration('weekly')}>Weekly</button>
          <button onClick={() => setFilterDuration('1month')}>1 Month</button>
          <button onClick={() => setFilterDuration('3months')}>3 Months</button>
        </div>
        <Search filteredPosts={filteredPosts} setFilteredPosts={setFilteredPosts} />
      </div>
      {filteredPosts.length > 0 ? (
        <div>
          {filteredPosts.map((post, index) => (
            <div key={index}>
              <p>Title: {post.title}</p>
              <p>Message: {post.description}</p>
              <p>Views: {post.views}</p>
              <button onClick={() => handleViewClick(index)}>View</button>
              <div>
                <Rating initialRating={userRating} onRatingChange={handleRatingChange} />
                {averageRating !== null && (
                  <p>Average Rating: {averageRating.toFixed(2)}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No posts added</div>
      )}
    </div>
  );
};

export default Posts;
