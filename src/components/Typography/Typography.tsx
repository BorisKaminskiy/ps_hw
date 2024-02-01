import { DetailedHTMLProps, FC, ReactNode, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Typography.module.scss";
import { TColor } from "@/types/colors";
import { Span } from "next/dist/trace";
import { colorName } from "@/types/colors";

interface ITypographyProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  variant: "t1" | "t2" | "t3" | "t4" | "t5";
  children: ReactNode;
  color: TColor;
}

const Typography: FC<ITypographyProps> = ({
  variant = "t1",
  color = "black-30",
  children,
  ...props
}): JSX.Element => {
  return (
    <span
      className={cn(styles[variant])}
      style={{ color: `var(--${color})` }}
      {...props}
    >
      {children}
    </span>
  );
};

export default Typography;
