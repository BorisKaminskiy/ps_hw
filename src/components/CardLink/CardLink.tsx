// "use client";

import { FC, ReactNode } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./CardLink.module.scss";

import Typography from "../Typography/Typography";
import ArrowIcon from "@/assets/svg/ArrowIcon";

interface ICardLinkProps {
  href: string;
  children: ReactNode;
}

const CardLink: FC<ICardLinkProps> = ({ href, children }) => {
  return (
    <Link className={cn(styles.root)} href={href}>
      <Typography variant='t1' color='primary'>
        {children}
      </Typography>
      <ArrowIcon width={20} height={20} stroke='#1473E6' />
    </Link>
  );
};

export default CardLink;
