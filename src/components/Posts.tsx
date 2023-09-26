import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import { IPostDataArray } from "@/interfaces/interface";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";
import { Piazzolla } from "next/font/google";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<IPostDataArray[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const paginaPorPost: number = 12;
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

        setPosts(postArray.reverse());
      } catch (e: any) {
        console.log(`Error ao tentar pegar os Posts`, e.message);
      }
    }

    getPosts();
  }, []);

  const paginaFinal = currentPage * paginaPorPost;
  const primeiraPagina = paginaFinal - paginaPorPost;
  const pagina = posts.slice(primeiraPagina, paginaFinal);

  function paginate(next: boolean) {
    next === true
      ? setCurrentPage(currentPage + 1)
      : setCurrentPage(currentPage - 1);
  }

  return (
    <main className={`w-full`}>
      <div className={`grid grid-cols-4 `}>
        {pagina.map((value, index) => (
          <PostCard
            key={value.id}
            id={value.id}
            title={value.title}
            description={value.description}
            createAt={value.createAt}
            url={value.image}
          />
        ))}
      </div>
      <div className={`flex justify-between pb-6 `}>
        <button
          onClick={() => paginate(false)}
          disabled={currentPage <= 1}
          className={`ml-5  bg-slate-200 p-1 ${
            currentPage <= 1 ? `cursor-not-allowed` : `cursor-pointer`
          }`}
        >
          <TbPlayerTrackPrevFilled size={30} color={"#555"} />
        </button>
        <button
          onClick={() => paginate(true)}
          disabled={pagina.length < paginaPorPost}
          className={`mr-[3.8rem] ${
            pagina.length < paginaPorPost
              ? "cursor-not-allowed"
              : "cursor-pointer"
          }  bg-slate-200 p-1 `}
        >
          <TbPlayerTrackNextFilled size={30} color={"#555"} />
        </button>
      </div>
    </main>
  );
};

export default Posts;
