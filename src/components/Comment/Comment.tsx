import { FC } from "react";
import { ICommentProps } from "@/types/comments";
import cn from "classnames";
import styles from "./Comment.module.scss";
import Typography from "../Typography/Typography";
import Paragraph from "../Paragraph/Paragraph";
import Divider from "../Divider/Divider";

const Comment: FC<ICommentProps> = ({ name, email, body }) => {
  return (
    <div className={styles.root}>
      <div className={cn(styles.header)}>
        <Typography variant='t4' color='black-30'>
          {name}
        </Typography>
        <Divider variant='point' size='small' color='black-20' />
        <Typography variant='t4' color='black-20'>
          {email}
        </Typography>
      </div>
      <div className={cn(styles.body)}>
        <Paragraph variant='p1' color='black-30'>
          {body}
        </Paragraph>
      </div>
    </div>
  );
};

export default Comment;
