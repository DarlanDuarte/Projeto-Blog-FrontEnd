import Header from "@/components/Header";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import TextArea from "@/components/TextArea";

const NewPost: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState("");
  const [imagem, setImagem] = useState<File | null>(null);
  const [msgError, setMsgError] = useState<string | null>(null);

  const router = useRouter();
  const baseURL = `http://localhost:8080`;

  async function handleNewPost(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    try {
      const token = localStorage.getItem("@token");
      console.log(title, description, token);
      const response = await fetch(`http://localhost:8080/posts`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        const { error }: any = await response.json();

        ExibirError(error);
        return;
      }

      const data = await response.json();
      console.log(data);

      setTitle("");
      setDescription("");
      router.push("/");
    } catch (e: any) {
      console.log(`Error ao tentar criar um Post Novo!`, e.message);
    }
  }

  async function ExibirError(msg: string, time = 2000) {
    console.log(msg);
    setMsgError(msg);
    setTimeout(() => setMsgError(null), time);
  }

  return (
    <div className={`w-screen h-screen overflow-hidden bg-[#bec9ca]`}>
      <Header />
      <main className={`flex justify-center mt-10 w-full h-full `}>
        <form className={`w-3/5 h-[75%] bg-[#fbfcfd] rounded-xl`}>
          <h1 className={`text-center mt-10 mb-12 text-4xl font-bold`}>
            Novo Post
          </h1>
          <fieldset
            className={`flex flex-col border-[3px] px-4  mx-6 rounded-lg`}
          >
            <legend className={`text-lg font-semibold`}>
              <label htmlFor="titulo">Post Title</label>
            </legend>
            <input
              type="text"
              id="titulo"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className={`outline-none text-xl mb-2 font-medium bg-[#fbfcfd]`}
              placeholder="Titulo do Post"
            />
          </fieldset>
          <div className={`flex flex-col mx-6 mt-4 mb-8 h-60 overflow-auto`}>
            <textarea
              className={`outline-none border-2 p-1`}
              name="description"
              cols={30}
              rows={10}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="flex flex-col mx-6 mt-4">
            <label className={`text-black font-semibold`} htmlFor="image">
              Escolha uma Imagem:
            </label>
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0];
                if (file) {
                  setImagem(file);
                }
              }}
            />
          </div>
          {msgError && (
            <div
              className={` bg-red-500 text-center boder-2 border-red-700 font-semibold text-white mx-10 mt-4 p-1 rounded-md`}
            >
              {" "}
              {msgError}{" "}
            </div>
          )}
          <div className={`flex justify-center items-center mt-10`}>
            <button
              onClick={(e) => handleNewPost(e)}
              className={`text-xl font-bold bg-green-500 w-1/3 h-8 rounded-xl text-white hover:bg-green-700 duration-500 z-10`}
            >
              Criar Post
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default NewPost;