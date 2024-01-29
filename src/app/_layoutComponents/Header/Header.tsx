import { FC } from "react";
import cn from "classnames";
import styles from "./Header.module.scss";
import { Logo } from "./components/Logo/Logo";
import { GitLink } from "./components/GitLink/GitLink";

export const Header: FC = () => {
  return (
    <header className={cn(styles.root)}>
      <Logo />
      <GitLink />
    </header>
  );
};
