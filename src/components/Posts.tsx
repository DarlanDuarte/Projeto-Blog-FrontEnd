import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";

const Posts: React.FC = () => {
  const post = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    async function getPosts() {
      const baseURL = `http://localhost:8080`;
    }

    getPosts();
  }, []);

  return (
    <div className={`grid grid-cols-4 `}>
      {post.map((value, index) => (
        <PostCard key={index} />
      ))}
    </div>
  );
};

export default Posts;
