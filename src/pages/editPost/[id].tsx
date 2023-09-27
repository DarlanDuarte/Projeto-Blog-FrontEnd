import Header from "@/components/Header";
import TextArea from "@/components/TextArea";
import { CreateContext } from "@/context/NovoContext";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const EditPost = () => {
  const router = useRouter();
  const { id } = router.query;

  const { token, baseURL } = useContext(CreateContext);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    const getPostById = async () => {
      try {
        const response = await fetch(`${baseURL}/posts/${id}`, {
          method: "GET",
        });

        if (!response.ok) {
          console.log(response);
          return;
        }

        const data = await response.json();

        setTitle(data.title);
        setDescription(data.description);
      } catch (e: any) {
        console.log(e.message);
      }
    };

    getPostById();
  }, []);

  async function handleUpdate(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    try {
      const response = await fetch(`${baseURL}/posts/${id}`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        const error = await response.json();
        toast.error(error);
        return;
      }

      const data = await response.json();

      toast.success(data.success);
      router.push("/");
      console.log(data);
    } catch (e: any) {
      console.log(e.message);
    }
  }

  return (
    <div className={`w-screen h-screen overflow-hidden bg-[#bec9ca]`}>
      <Header />
      <main className={`flex justify-center mt-10 w-full h-full `}>
        <form className={`w-3/5 h-[75%] bg-[#fbfcfd] rounded-xl`}>
          <h1 className={`text-center mt-10 mb-12 text-4xl font-bold`}>
            Atualizando Post
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
            <TextArea
              description={description}
              setDescription={setDescription}
            />
          </div>

          <div className={`flex justify-center items-center mt-10`}>
            <button
              onClick={(e) => handleUpdate(e)}
              className={`text-xl font-bold bg-green-500 w-1/3 h-8 rounded-xl text-white hover:bg-green-700 duration-500 z-10`}
            >
              Atualizar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default EditPost;
