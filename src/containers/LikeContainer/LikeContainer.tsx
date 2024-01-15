"use client";

import { FC, useState, MouseEvent } from "react";
import cn from "classnames";
import styles from "./LikeContainer.module.scss";
import Typography from "@/components/Typography/Typography";
import LikeIcon from "@/assets/svg/LikeIcon";


interface ILikeContainerProps {
  blogId: string;
}

export const LikeContainer: FC<ILikeContainerProps> = ({
  blogId,
  ...props
}) => {
  const [isLiked, setLiked] = useState<boolean>(false);

  const onClick = (e: MouseEvent): void => {
    if (isLiked) return;

    setLiked(true);
  };

  return (
    <div className={cn(styles.root)}>
      <Typography variant='t3' color='black'>
        {"Понравилось? Жми"}
      </Typography>
      <button
        className={cn(
          styles.like_button,
          isLiked ? styles.liked : styles.not_liked
        )}
        onClick={onClick}
      >
        <LikeIcon width={16} height={16} stroke={isLiked ? "blue" : "black"} />
      </button>
    </div>
  );
};
