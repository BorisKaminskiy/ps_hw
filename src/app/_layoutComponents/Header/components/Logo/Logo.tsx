import { FC } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./Logo.module.scss";
import LogoIcon from "@/assets/svg/LogoIcon";

export const Logo: FC = () => {
  return (
    <Link
      href='/'
      className={cn(styles.root)}
      tabIndex={0}
      aria-label='Переход на главную страницу'
    >
      <LogoIcon />
    </Link>
  );
};
