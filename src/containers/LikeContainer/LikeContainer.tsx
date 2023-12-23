"use client";

import { FC, useState, MouseEvent } from "react";
import cn from "classnames";
import styles from "./LikeContainer.module.scss";
import { checkId, setId } from "./utils";
import Typography from "@/components/Typography/Typography";
import LikeIcon from "@/assets/svg/LikeIcon";
import { usePortal } from "@/store/portal";
import { getData } from "@/api/getBlog";

interface ILikeContainerProps {
  blogId: string;
}

export const LikeContainer: FC<ILikeContainerProps> = ({
  blogId,
  ...props
}) => {
  const [isLiked, setLiked] = useState<boolean>(() => checkId(blogId));
  const setPortal = usePortal((state) => state.setPortal);

  const onClick = (e: MouseEvent): void => {
    console.log("check");
    if (isLiked) return;

    setPortal(true);
    getData()
      .then(() => {
        setId(blogId);
        console.log(checkId(blogId));
        setLiked(!!checkId(blogId));
      })
      .catch((error) => console.error(error))
      .finally(() => setPortal(false));
  };
  // checkId(blogId);
  // console.log(checkId(blogId));
  // setId(blogId);

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
