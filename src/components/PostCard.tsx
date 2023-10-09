import React, { useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { IPostCard } from "@/interfaces/interface";
import { CreateContext } from "@/context/NovoContext";

function removeHtmlTags(input: string) {
  //Remove HTML
  let withoutTags = input.replace(/<[^>]+>/g, "");

  // Remove entidades HTML como &nbsp;
  withoutTags = withoutTags.replace(/&[^;]+;/g, "");

  return withoutTags;
}

const PostCard: React.FC<IPostCard> = ({
  id,
  title,
  description,
  createAt,
  url,
}) => {
  const router = useRouter();
  const { baseURL } = useContext(CreateContext);
  const [image, setImage] = useState<any>(url);

  async function handleClick() {
    await router.push(`/posts/${id}?id=${id}`);
  }

  const clearDescription = removeHtmlTags(description);

  function handleErrorImage() {
    const imageError = `/img/background.jpg`;
    setImage(imageError);
  }

  return (
    <div
      className={` relative  w-[20rem] h-[30rem] bg-[#e0e5e6] mx-5 mt-5 shadow-3xl mb-5 `}
    >
      <Image
        src={`${image}`}
        alt="imagePost"
        width={200}
        height={200}
        className={`w-full h-[35%] mb-2`}
        priority={true}
        quality={25}
        onError={handleErrorImage}
      />
      <p className={`text-center font-medium text-gray-400`}>{createAt}</p>
      <h3 className={` text-center text-2xl font-semibold text-[#5b627e] z-10`}>
        {title.substring(0, 50)}
      </h3>
      <div className={`mt-2 text-center`}>
        {clearDescription.substring(0, 150)}
      </div>
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
