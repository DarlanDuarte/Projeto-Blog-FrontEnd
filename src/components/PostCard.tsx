import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const PostCard: React.FC = () => {
  const router = useRouter();

  function handleClick() {
    router.push("/post");
  }

  return (
    <div
      className={` relative  w-[20rem] h-[30rem] bg-[#e0e5e6] mx-5 mt-5 shadow-3xl mb-5 `}
    >
      <Image
        src={"/img/blog-background3.jpg"}
        alt="imagePost"
        width={200}
        height={200}
        className={`w-full h-[35%]`}
      />
      <h3 className={`mt-4 text-center text-2xl font-semibold text-[#5b627e]`}>
        Titulo do Post
      </h3>
      <p className={`mt-4 text-center`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo autem
        quod adipisci, tempore asperiores itaque harum facere quidem
        necessitatibus veritatis odio eveniet repellendus hic dicta fugiat,
        commodi sint sed! Lorem ipsum dolor sit amet consectetur, adipisicing
        elit.
      </p>
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
