import { Post } from "./Posts";
import { useEffect, useState } from "react";
import '../css/search.css'

interface SearchProps {
  posts: Post[]
  setSearch: React.Dispatch<React.SetStateAction<Boolean>>;
  setSearchedPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

const Search: React.FC<SearchProps> = ({ posts, setSearch, setSearchedPosts }) => {
  const [searchItem, setSearchItem] = useState<string>("");

  useEffect(() => {
    if(searchItem === ''){
      setSearch(false)
    }
  },[searchItem])

  const searchForSearchItem = (searchItem: string, posts: Post[]) => {
    const results: Post[] = [];
    for (const post of posts) {
      if (
        post.title.toLowerCase().includes(searchItem.toLowerCase()) ||
        post.description.toLowerCase().includes(searchItem.toLowerCase())
      ) {
        results.push(post);
      }
    }
    setSearchedPosts([...results]);
  };

  return (
    <div className="z-[-999]">
      <div className="relative mt-6">
  <input
    type="text"
    value={searchItem}
    onChange={(e) => setSearchItem(e.target.value)}
    placeholder="Search"
    aria-label="Search"
    className="block w-full rounded-2xl border border-gray bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-transparent transition placeholder:text-neutral-500"
  />
  <div className="absolute inset-y-1 right-1 flex justify-end">
    <button
    onClick={() => {
      searchForSearchItem(searchItem, posts)
      setSearch(true)
    }}
      type="submit"
      aria-label="Submit"
      className="flex aspect-square h-full items-center justify-center rounded-xl bg-black text-white transition"
    >
      <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
        <path
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 3 10 .5v2H0v1h10v2L16 3Z"
        ></path>
      </svg>
    </button>
  </div>
</div>

      
    </div>
  );
};

export default Search;

{/* <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 -960 960 960"
        width="24"
      >
        <path d="M779.385-153.846 528.923-404.307q-30 25.538-69 39.538-39 14-78.385 14-96.1 0-162.665-66.529-66.566-66.529-66.566-162.577t66.529-162.702q66.529-66.654 162.577-66.654 96.049 0 162.702 66.565Q610.769-676.101 610.769-580q0 41.692-14.769 80.692-14.769 39-38.769 66.693l250.462 250.461-28.308 28.308ZM381.538-390.769q79.616 0 134.423-54.808Q570.769-500.385 570.769-580q0-79.615-54.808-134.423-54.807-54.808-134.423-54.808-79.615 0-134.423 54.808Q192.308-659.615 192.308-580q0 79.615 54.807 134.423 54.808 54.808 134.423 54.808Z" />
      </svg>
      <input
        placeholder="Search here"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      /> */}
      {/* <button onClick={() => {
        searchForSearchItem(searchItem, posts)
        setSearch(true)
      }}>
        Search
      </button> */}
