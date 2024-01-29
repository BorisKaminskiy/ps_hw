import { FC } from "react";
import cn from "classnames";
import styles from "./GitLink.module.scss";
import Link from "next/link";
import GitIcon from "@/assets/svg/GitIcon";

export const GitLink = () => {
  return (
    <Link href='https://github.com/BorisKaminskiy' target='_blank'>
      <GitIcon width={24} height={24} />
    </Link>
  );
};
