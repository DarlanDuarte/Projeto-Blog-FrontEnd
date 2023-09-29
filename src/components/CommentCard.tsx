import { ICommentPost } from "@/interfaces/interface";
import React from "react";

const CommentCard = ({
  id,
  postId,
  userId,
  comment,
  usuario,
}: ICommentPost) => {
  return (
    <div className={`mt-4 p-2`}>
      <div className={`text-md text-blue-600 font-bold`}> {usuario} </div>
      <div dangerouslySetInnerHTML={{ __html: comment }}></div>
    </div>
  );
};

export default CommentCard;
