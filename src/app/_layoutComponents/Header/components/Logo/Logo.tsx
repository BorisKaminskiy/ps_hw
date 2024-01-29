// "use client";

import { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./Logo.module.scss";
import LogoIcon from "@/assets/svg/LogoIcon";

export const Logo: FC = () => {
  return (
    <Link href='/' className={cn(styles.root)}>
      <LogoIcon />
    </Link>
  );
};
