import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import React, { useContext } from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { IPostDataArray } from "@/interfaces/interface";
import { CreateContext } from "@/context/NovoContext";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> => {
  try {
    const baseURL = `http://localhost:8080`;
    const { id } = context.query;
    const response = await fetch(`${baseURL}/posts/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      return {
        notFound: true,
      };
    }

    const data: IPostDataArray = await response.json();

    return {
      props: {
        data,
      },
    };
  } catch (e: any) {
    console.log(e.message);
    return {
      notFound: true,
    };
  }
};

const Post: React.FC<{ data: IPostDataArray }> = ({ data }) => {
  const { baseURL, token } = useContext(CreateContext);

  return (
    <div className={`bg-[#bec9ca] pb-52`}>
      <header className={`sticky top-0 z-50`}>
        <Header />
      </header>
      <div className={`flex `}>
        <div className={`w-full mx-32 mt-10 `}>
          <div>
            <Image
              src={
                data.image !== null
                  ? `${baseURL}/${data.image}`
                  : `/img/background.jpg`
              }
              alt="Imagem do Post"
              width={500}
              height={500}
              className={`w-screen h-[32rem]  object-fill`}
              priority={true}
            />
          </div>
          <div className={`bg-[#fff]  pb-10`}>
            <h2 className={`text-center text-4xl font-bold pt-8`}>
              {data.title}
            </h2>
            <div
              className={`text-xl text-justify px-8 mt-10`}
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></div>
          </div>
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default Post;
