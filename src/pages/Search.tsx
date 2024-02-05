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
    if (searchItem === '') {
      setSearch(false)
    }
  }, [searchItem])

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
    <div>
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
