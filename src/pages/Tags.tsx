import React, { useState } from "react";

interface Post {
  title: string;
  category: string;
  message: string;
}

interface CategoryOption {
  value: string;
  label: string;
}

interface TagsProps {
  posts: Post[];
  onCategoryChange: (category: string) => void;
}

function Tags({ posts, onCategoryChange }: TagsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  const categoryOptions: CategoryOption[] = [
    { value: "", label: "All Categories" },
    { value: "cars", label: "Cars" },
    { value: "clothes", label: "Clothes" },
    { value: "hair", label: "Hair" },
    { value: "bursaries", label: "Bursaries" },
  ];

  const filteredPosts = selectedCategory
    ? posts.filter((post) => {
        const words = post.message.split(" ");
        return (
          (post.category === selectedCategory ||
            post.title.toLowerCase().includes(selectedCategory) ||
            post.message.toLowerCase().includes(selectedCategory)) &&
          words.length >= 3
        );
      })
    : posts;

  return (
    <div>
      <h1>Posts</h1>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        {categoryOptions.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>
      <ul>
        {filteredPosts.map((post, index) => (
          <li key={index}>
            <strong>{post.title}</strong>
            <p>{post.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tags;
