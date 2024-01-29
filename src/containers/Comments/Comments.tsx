import { FC } from "react";
import cn from "classnames";
import styles from "./Comments.module.scss";
import { getComments } from "@/api/getComments";
import Htag from "@/components/Htag/Htag";
import Comment from "@/components/Comment/Comment";

interface IComments {
  postId: number;
}

const Comments: FC<IComments> = async ({ postId }) => {
  const comments = await getComments(postId);

  return (
    <div className={cn(styles.root)}>
      <Htag tag='h2' color='black'>
        Комментарии
      </Htag>
      {comments.map((item) => (
        <Comment key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Comments;
