import Header from "@/components/Header";
import TextArea from "@/components/TextArea";
import React, { useState, useEffect } from "react";

const NewPost: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [imagem, setImagem] = useState<File | null>(null);

  return (
    <div className={`w-screen h-screen overflow-hidden bg-[#bec9ca]`}>
      <Header />
      <main className={`flex justify-center mt-10 w-full h-full`}>
        <form className={`w-3/5 h-2/3 bg-[#fbfcfd] rounded-xl`}>
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
          <div className={`mx-6 mt-6 h-60`}>
            <TextArea />
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
          <div className={`flex justify-center items-center mt-10`}>
            <button
              className={`text-xl font-bold bg-green-500 w-1/3 h-8 rounded-xl text-white hover:bg-green-700 duration-500`}
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
