import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import React from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { IPostDataArray } from "@/interfaces/interface";

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

    console.log(response);
    console.log(id);

    if (!response.ok) {
      return {
        notFound: true,
      };
    }

    const data: IPostDataArray = await response.json();
    console.log(data);

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
  return (
    <div className={`bg-[#bec9ca]`}>
      <header className={`sticky top-0 z-50`}>
        <Header />
      </header>
      <div className={`flex `}>
        <div className={`w-full mx-32 mt-10 `}>
          <div>
            <Image
              src={"/img/background.jpg"}
              alt="Imagem do Post"
              width={500}
              height={500}
              className={`w-screen h-[32rem]  object-fill`}
            />
          </div>
          <div className={`bg-[#f2f2f2]  pb-10`}>
            <h2 className={`text-center text-4xl font-bold pt-8`}>
              {data.title}
            </h2>
            <p className={`text-xl text-justify px-8 mt-10`}>
              {data.description}
            </p>
          </div>
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default Post;
