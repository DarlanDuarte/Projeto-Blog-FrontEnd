import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import Image from "next/image";
import React, { useContext, useState, useEffect } from "react";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { ICommentPost, IPostDataArray } from "@/interfaces/interface";
import { CreateContext } from "@/context/NovoContext";
import TextArea from "@/components/TextArea";
import { useRouter } from "next/router";
import CommentCard from "@/components/CommentCard";
import { toast } from "react-toastify";

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
  const router = useRouter();
  const [openComment, setOpenComment] = useState<boolean>(false);
  const [comment, setComment] = useState("");
  const [postComment, setPostComment] = useState<ICommentPost[]>([]);
  const [image, setImage] = useState<string | null>(data.image);

  const { baseURL, token } = useContext(CreateContext);
  const { id } = router.query;

  useEffect(() => {
    const getCommmentById = async () => {
      try {
        const response = await fetch(`${baseURL}/posts/comment/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          console.log(`Não existe Comentário nesse Post`);
          return;
        }

        const data: ICommentPost[] = await response.json();

        setPostComment(data);

        console.log(data);
      } catch (e: any) {
        console.log(e.message);
      }
    };

    getCommmentById();
  }, [comment]);

  async function createComment(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();

    try {
      const response = await fetch(`${baseURL}/posts/comment/${id}`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment }),
      });

      if (!response.ok) {
        console.log(await response.json());
        return;
      }

      const data = await response.json();

      console.log(data);
      toast.success(data.message);
      setComment("");
      setOpenComment(false);
    } catch (e: any) {
      console.log(e.message);
    }
  }

  function handleImageError() {
    const errorImage = `/img/background.jpg`;
    setImage(errorImage);
  }

  return (
    <div className={`bg-[#bec9ca] pb-52`}>
      <header className={`sticky top-0 z-50`}>
        <Header />
      </header>
      <div className={`flex `}>
        <div
          className={`w-full mx-32 mt-10 
        lg:mx-16  
        md:mx-10
        sm:mx-4
        `}
        >
          <div>
            <Image
              src={`${image}`}
              alt="Imagem do Post"
              width={500}
              height={500}
              className={`w-screen h-[32rem]  object-fill`}
              priority={true}
              onError={handleImageError}
            />
          </div>
          <div className={`bg-[#fff]  pb-10`}>
            <h2 className={`text-center text-4xl font-bold pt-8`}>
              {data.title}
            </h2>
            <div
              className={`text-xl text-justify px-8 mt-10
              md:text-left
              sm:text-left
              
              `}
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></div>
          </div>
          <button
            onClick={() => setOpenComment(!openComment)}
            className={`w-48 p-1 bg-slate-950 mt-2 font-semibold text-white`}
          >
            Faça seu Comentário
          </button>
          {openComment && (
            <div>
              <TextArea
                key={""}
                description={comment}
                setDescription={setComment}
              />
              <button
                onClick={(e) => createComment(e)}
                className={` mt-2 text-center w-full bg-black hover:bg-green-500 duration-500 p-1 font-semibold text-neutral-50 rounded-lg`}
              >
                Comentar
              </button>
            </div>
          )}
          <div className={`mt-10`}>
            {postComment && (
              <div className={``}>
                {postComment.map((value, index) => (
                  <div className={`w-full bg-white shadow-3xl rounded-lg`}>
                    <CommentCard
                      key={value.id}
                      id={value.id}
                      postId={value.postId}
                      userId={value.userId}
                      comment={value.comment}
                      usuario={value.usuario}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <SideBar />
      </div>
    </div>
  );
};

export default Post;
