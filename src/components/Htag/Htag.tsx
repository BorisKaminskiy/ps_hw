import { DetailedHTMLProps, FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./Htag.module.scss";

import { TColor } from "@/types/colors";

interface IHtagProps {
  tag: "h1" | "h2" | "h3";
  color?: TColor;
  children: ReactNode;
}

const Htag: FC<IHtagProps> = ({
  tag,
  color = "black",
  children,
  ...props
}): JSX.Element => {
  switch (tag) {
    case "h1":
      return (
        <h1 className={cn(styles[tag])} style={{ color: `var(--${color})` }}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={cn(styles[tag])} style={{ color: `var(--${color})` }}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={cn(styles[tag])} style={{ color: `var(--${color})` }}>
          {children}
        </h3>
      );
  }
};

export default Htag;
