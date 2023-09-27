import { CreateContext } from "@/context/NovoContext";
import { DeletePostUser } from "@/functions/deletePost";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { LiaEdit } from "react-icons/lia";

const Table = ({
  id,
  title,
  description,
  url,
}: {
  id: number | string;
  title: string;
  description: string;
  url: string | null;
}) => {
  const router = useRouter();

  function removeHtmlTags(input: string) {
    return input.replace(/<[^>]+>/g, "");
  }

  async function handleEdit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number | string
  ) {
    router.push(`http://localhost:3000/editPost/${id}?id=${id}`);
  }

  const clearDescription = removeHtmlTags(description);

  const { baseURL, token } = useContext(CreateContext);

  return (
    <tr className={`border-2 `}>
      <td className={`text-center p-2 border-[1px]`}> {id} </td>
      <td className={` p-2 border-[1px]`}>
        <Image
          src={`${url !== null ? `${baseURL}/${url}` : `/img/background.jpg`}`}
          width={120}
          height={120}
          alt="image"
          className={`object-contain w-full mx-auto`}
          priority={true}
        />
      </td>
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
