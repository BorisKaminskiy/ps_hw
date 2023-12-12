import { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./Paragraph.module.scss";
import { TColor } from "@/types/colors";

interface IParagraphProps {
  variant: "p1" | "p2";
  color?: TColor;
  children: ReactNode;
}

const Paragraph: FC<IParagraphProps> = ({
  variant = "p1",
  color = "black-20",
  children,
  ...props
}): JSX.Element => {
  return (
    <p className={cn(styles[variant])} style={{ color: `var(--${color})` }}>
      {children}
    </p>
  );
};

export default Paragraph;
