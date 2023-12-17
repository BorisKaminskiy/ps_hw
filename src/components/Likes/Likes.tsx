import { FC } from "react";
import cn from "classnames";
import styles from "./Likes.module.scss";
import LikeIcon from "@/assets/svg/LikeIcon";
import Typography from "../Typography/Typography";
import { TColor } from "@/types/colors";

interface ILikesProps {
  quantity: number;
  quantityColor: TColor;
  iconColor?: string;
}

const Likes: FC<ILikesProps> = ({
  quantity = 0,
  quantityColor,
  iconColor = "#808080",
  ...props
}) => {
  return (
    <div className={cn(styles.root)}>
      <Typography variant='t1' color={quantityColor}>
        {quantity}
      </Typography>
      <LikeIcon width={16} height={16} stroke={iconColor} />
    </div>
  );
};

export default Likes;
