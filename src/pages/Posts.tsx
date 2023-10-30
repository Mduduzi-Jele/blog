import { useState, useEffect } from "react";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

export interface Post {
  id: number;
  title: string;
  description: string;
  dataTime: Date;
  name: string;
  views: number;
  likes: number;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchedPosts, setSearchedPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/posts`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setPosts(jsonData);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const sortData = () => {
    posts.sort((a, b) => {
      if (a.dataTime && b.dataTime) {
        return new Date(b.dataTime).getTime() - new Date(a.dataTime).getTime();
      } else {
        return 0;
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  sortData()

  const addView = (post: Post) => {
    // const userId = sessionStorage.getItem("userId")
    const newPost = { views: post.views + 1 };

    fetch(`http://localhost:8080/view/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("Fetch error", error);
      });
  };

  const allPosts = () => {
    fetchData();
    sortData()
  };

  const weekly = (posts: Post[]) => {
    const now = new Date();
    const oneWeekAgo = new Date(now);
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const filteredPosts = posts.filter((post) => {
      const postDate = new Date(post.dataTime);
      return postDate <= oneWeekAgo;
    });

    setPosts(filteredPosts);
    sortData();
  };

  const monthly = (posts: Post[]) => {
    const now = new Date();
    const oneMonthAgo = new Date(now);
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const filteredPosts = posts.filter((post) => {
      const postDate = new Date(post.dataTime);
      return postDate <= oneMonthAgo;
    });
    setPosts(filteredPosts);
    sortData();
  };

  const threeMonths = (posts: Post[]) => {
    const now = new Date();
    const threeMonthsAgo = new Date(now);
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    const filteredPosts = posts.filter((post) => {
      const postDate = new Date(post.dataTime);
      return postDate <= threeMonthsAgo;
    });
    setPosts(filteredPosts);
    sortData();
  };

  return (
    <div>
      <div className="filter__search">
        <div className="filter">
          <button onClick={() => {allPosts()}}>All</button>
          <button onClick={() => {weekly(posts)}}>Weekly</button>
          <button onClick={() => {monthly(posts)}}>1 Month</button>
          <button onClick={() => {threeMonths(posts)}}>3 Months</button>
        </div>
        <Search
          posts={posts}
          setSearch={setSearch}
          setSearchedPosts={setSearchedPosts}
        />
      </div>
      <div>
        {search === false
          ? posts?.map((post, index) => {
              let description = post.description.split(" ");
              description = description.slice(0, 15);
              const desc: string = description.join(" ");
              return (
                <div key={index}>
                  <img className="mypost__item__image" src={`http://localhost:8080/images/${post.id}`} alt="Uploaded Image" />
                  <p>Title: {post.title}</p>
                  <p>Message: {`${desc}...`}</p>
                  <p>Views: {post.views}</p>
                  <p>Likes: {post.likes}</p>
                  <p>Time: {post.dataTime.toString()}</p>
                  <button
                    onClick={() => {
                      addView(post);
                      navigate("/Readmore", {
                        state: {
                          id: post.id,
                          title: post.title,
                          description: post.description,
                          dateTime: post.dataTime,
                          likes: post.likes,
                        },
                      });
                    }}
                  >
                    Read More
                  </button>
                  <div></div>
                </div>
              );
            })
          : searchedPosts?.map((post, index) => {
              let description = post.description.split(" ");
              description = description.slice(0, 15);
              const desc: string = description.join(" ");
              return (
                <div key={index}>
                  <p>Title: {post.title}</p>
                  <p>Message: {`${desc}...`}</p>
                  <p>Views: {post.views}</p>
                  <p>Likes: {post.likes}</p>
                  <button
                    onClick={() => {
                      addView(post);
                      navigate("/Readmore", {
                        state: {
                          id: post.id,
                          title: post.title,
                          description: post.description,
                          dateTime: post.dataTime,
                          likes: post.likes,
                        },
                      });
                    }}
                  >
                    Read More
                  </button>
                  <div></div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Posts;
