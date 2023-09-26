import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface IPostCard {
  id: number | string;
  title: string;
  description: string;
  createAt: string;
  url: string | null;
}

const PostCard: React.FC<IPostCard> = ({
  id,
  title,
  description,
  createAt,
  url,
}) => {
  const router = useRouter();

  function handleClick() {
    router.push(`/posts/${id}`);
  }

  const baseURL = `http://localhost:8080`;
  console.log(url);

  return (
    <div
      className={` relative  w-[20rem] h-[30rem] bg-[#e0e5e6] mx-5 mt-5 shadow-3xl mb-5 `}
    >
      <Image
        src={url !== null ? `${baseURL}/${url}` : `/img/blog-background3.jpg`}
        alt="imagePost"
        width={200}
        height={200}
        className={`w-full h-[35%] mb-2`}
      />
      <p className={`text-center font-medium text-gray-400`}>{createAt}</p>
      <h3 className={` text-center text-2xl font-semibold text-[#5b627e] z-10`}>
        {title.substring(0, 50)}
      </h3>
      <p className={`mt-2 text-center`}>{description.substring(0, 150)}</p>
      <button
        onClick={() => handleClick()}
        className={`absolute bottom-0 w-full px-5 py-2 bg-[#5b627e] text-white text-xl `}
      >
        Continue Lendo
      </button>
    </div>
  );
};

export default PostCard;
