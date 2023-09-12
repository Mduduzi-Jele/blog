interface Post {
  title: string;
  message: string;
  dateTime: Date;
}

const Posts = () => {
  const localstoragekeys = Object.keys(localStorage);
  const posts: Post[] = [];
  let user;
  let sortedArray;

  const fetchPosts = () => {
    localstoragekeys.map((userId) => {
      user = JSON.parse(localStorage.getItem(userId));
      if (user) {
        if (user.myPosts) {
          user.myPosts.map((post: Post) => {
            posts.push(post);
          });
        }
      }
    });
  };

  fetchPosts();

  if (user.myPosts) {
    sortedArray = posts.sort((a, b) => {
      if (a.dateTime && b.dateTime) {
        return new Date(b.dateTime) - new Date(a.dateTime);
      } else if (a.dateTime) {
        return -1; // Move objects with 'a' having dateTime to the front
      } else if (b.dateTime) {
        return 1; // Move objects with 'b' having dateTime to the front
      } else {
        return 0; // Keep the order unchanged if neither have dateTime
      }
    });
  }

  console.log(sortedArray);

  return (
    <div>
      {user.myPosts ? (
        <div>
          {sortedArray?.map((post, index) => {
            return (
              <div key={index}>
                <p>Title: {post.title}</p>
                <p>Message: {post.message}</p>
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