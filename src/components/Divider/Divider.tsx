import { FC } from "react";
import cn from "classnames";
import styles from "./Divider.module.scss";

interface IDividerProps {
  variant: "point" | "slash";
  size: "small";
  color: string;
}

const Divider: FC<IDividerProps> = ({ variant, size, color }) => {
  return (
    <>
      {variant === "point" && (
        <span className={cn(styles[size])} style={{ color: `var(--${color})` }}>
          ·
        </span>
      )}
      {variant === "slash" && (
        <span className={cn(styles[size])} style={{ color: `var(--${color})` }}>
          /
        </span>
      )}
    </>
  );
};

export default Divider;
