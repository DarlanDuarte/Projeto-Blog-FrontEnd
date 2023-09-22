import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import { IPostDataArray } from "@/interfaces/interface";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<IPostDataArray[]>([]);
  const baseURL = `http://localhost:8080`;

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(`${baseURL}/posts`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          console.log(response.json());
          return;
        }

        const data = await response.json();

        const postArray: IPostDataArray[] = Object.values(data);
        console.log(postArray);

        setPosts(postArray);
      } catch (e: any) {
        console.log(`Error ao tentar pegar os Posts`, e.message);
      }
    }

    getPosts();
  }, []);

  return (
    <div className={`grid grid-cols-4 `}>
      {posts.map((value, index) => (
        <PostCard
          key={value.id}
          id={value.id}
          title={value.title}
          description={value.description}
          createAt={value.createAt}
        />
      ))}
    </div>
  );
};

export default Posts;
