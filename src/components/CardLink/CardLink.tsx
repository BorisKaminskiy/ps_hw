// "use client";

import { FC, ReactNode, KeyboardEvent } from "react";
import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/navigation";
import styles from "./CardLink.module.scss";

import Typography from "../Typography/Typography";
import ArrowIcon from "@/assets/svg/ArrowIcon";

interface ICardLinkProps {
  href: string;
  children: ReactNode;
}

const CardLink: FC<ICardLinkProps> = ({ href, children }) => {
  const router = useRouter();

  return (
    <Link
      className={cn(styles.root)}
      href={href}
      onKeyDown={(e: KeyboardEvent<HTMLAnchorElement>) => {
        e.code === "Enter" && router.push(href);
      }}
    >
      <Typography variant='t1' color='primary' tabIndex={0}>
        {children}
      </Typography>
      <ArrowIcon width={20} height={20} stroke='#1473E6' />
    </Link>
  );
};

export default CardLink;
