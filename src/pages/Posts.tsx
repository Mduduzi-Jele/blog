// @ts-nocheck
import { useState, useEffect } from "react";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";

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
    <div className="ml-[30px] mr-[30px]">
      <div className="filter__search md:pr-11 justify-center md:justify-between items-center md:display-none">
        <div className="filter">
          <button onClick={() => { allPosts() }}>All</button>
          <button onClick={() => { weekly(posts) }}>Weekly</button>
          <button onClick={() => { monthly(posts) }}>1 Month</button>
          <button onClick={() => { threeMonths(posts) }}>3 Months</button>
        </div>
        <Search
          posts={posts}
          setSearch={setSearch}
          setSearchedPosts={setSearchedPosts}
        />
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center md:flex-row gap-10 mt-8">
        {search === false
          ? posts?.map((post, index) => {
            let description = post.description.split(" ");
            description = description.slice(0, 15);
            const desc: string = description.join(" ");
            return (
              <>
                <PostCard post={post} index={index} id={post.id} title={post.title} desc={desc} views={post.views} likes={post.likes} time={post.dataTime.toString()} />
              </>
            );
          })
          : searchedPosts?.map((post, index) => {
            let description = post.description.split(" ");
            description = description.slice(0, 15);
            const desc: string = description.join(" ");
            return (
              <>
                <PostCard index={index} id={post.id} title={post.title} desc={desc} views={post.views} likes={post.likes} time={post.dataTime.toString()} />
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Posts;
