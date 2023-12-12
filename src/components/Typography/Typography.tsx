import { FC, ReactNode } from "react";
import cn from "classnames";
import styles from "./Typography.module.scss";
import { TColor } from "@/types/colors";

interface ITypographyProps {
  variant: "t1" | "t2" | "t3";
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
    <span className={cn(styles[variant])} style={{ color: `var(--${color})` }}>
      {children}
    </span>
  );
};

export default Typography;
