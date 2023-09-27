import Header from "@/components/Header";
import Table from "@/components/Table";
import React, { useState, useEffect, useContext } from "react";

import { CreateContext } from "@/context/NovoContext";
import { IPostDataArray } from "@/interfaces/interface";

const Painel = () => {
  const { token, baseURL } = useContext(CreateContext);
  const [posts, setPosts] = useState<IPostDataArray[]>([]);

  useEffect(() => {
    const getPostUser = async () => {
      try {
        const response = await fetch(`${baseURL}/user/posts`, {
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          console.log(response);
          return;
        }

        const data = await response.json();

        const arrayPosts: IPostDataArray[] = Object.values(data.posts);

        setPosts(arrayPosts);
      } catch (e: any) {
        console.log(e.message);
      }
    };

    getPostUser();
  }, [posts]);

  return (
    <div className={` w-screen h-screen`}>
      <Header />
      <div className={`flex justify-center  w-screen h-screen bg-[#bec9ca]  `}>
        <div
          className={`w-[90%] h-[80%] mt-14 bg-white shadow-4xl overflow-auto`}
        >
          <h2 className={`text-3xl text-center mt-2 font-semibold`}>
            Painel Admistrativo do Usuário
          </h2>
          <table className={`mt-14 w-full table border-2 `}>
            <thead className={` border-[3px] border-slate-300`}>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>title</th>
                <th>description</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody className={``}>
              {posts.map((value, index) => (
                <Table
                  key={value.id}
                  id={value.id}
                  title={value.title}
                  description={value.description}
                  url={value.image}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Painel;
