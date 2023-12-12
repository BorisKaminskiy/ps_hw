"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import cn from "classnames";
import styles from "./CardLink.module.scss";
import { ItemProps } from "@/types/item";
import { TColor } from "@/types/colors";
import Typography from "../Typography/Typography";
import ArrowIcon from "@/assets/svg/ArrowIcon";

interface ICardLinkProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  props: ItemProps;
  textColor: TColor;
}

const CardLink: FC<ICardLinkProps> = ({ textColor, children, ...props }) => {
  const onLinkClick = () => {
    alert("Функционал в разработке");
  };

  return (
    <button className={cn(styles.root)} onClick={onLinkClick}>
      <Typography variant='t1' color='primary'>
        {children}
      </Typography>
      <ArrowIcon width={20} height={20} stroke='#1473E6' />
    </button>
  );
};

export default CardLink;
