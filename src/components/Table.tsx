import { CreateContext } from "@/context/NovoContext";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { LiaEdit } from "react-icons/lia";
import { toast } from "react-toastify";
import { IPostDataArray } from "@/interfaces/interface";

const Table = ({
  id,
  title,
  description,

  setPost,
}: {
  id: number | string;
  title: string;
  description: string;

  setPost: React.Dispatch<React.SetStateAction<IPostDataArray[]>>;
}) => {
  const router = useRouter();

  function removeHtmlTags(input: string) {
    return input.replace(/<[^>]+>/g, "");
  }
  const clearDescription = removeHtmlTags(description);

  const { baseURL, token } = useContext(CreateContext);

  async function handleEdit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number | string
  ) {
    router.push(`http://localhost:3000/editPost/${id}?id=${id}`);
  }

  function removePost(id: number | string) {
    setPost((prevPost) => prevPost.filter((post) => post.id !== id));
  }

  async function DeletePostUser(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number | string,
    token: string | null,
    baseURL: string
  ) {
    try {
      const response = await fetch(`${baseURL}/posts/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.log(response);
        return;
      }

      const data = await response.json();

      removePost(id);
      toast.success(data.sucess);
    } catch (e: any) {
      console.log(e.message);
    }
  }

  return (
    <tr className={`border-2 `}>
      <td className={`text-center p-2 border-[1px]`}> {id} </td>

      <td className={`text-center p-2 border-[1px]`}>
        {title.substring(0, 40)}
      </td>
      <td className={`text-center p-2 border-[1px]`}>
        {clearDescription.substring(0, 100)}
      </td>
      <td className={`flex justify-center mt-8`}>
        <button onClick={(e) => handleEdit(e, id)} className={`mx-2`}>
          <LiaEdit size={28} color={"#5a9d2d"} />
        </button>
        <button
          onClick={(event) => DeletePostUser(event, id, token, baseURL)}
          className={`mx-2`}
        >
          <AiOutlineDelete size={28} color={`#ba1a1a`} />
        </button>
      </td>
    </tr>
  );
};

export default Table;
