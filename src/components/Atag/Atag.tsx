import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from "react";
import cn from "classnames";
import styles from "./Atag.module.scss";
import { TColor } from "@/types/colors";

interface IAtagProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  variant?: "a1";
  color?: TColor;
}

const Atag: FC<IAtagProps> = ({
  variant = "a1",
  color = "black-20",
  children,
  href,
  ...props
}): JSX.Element => {
  return (
    <>
      <a
        className={cn(styles[variant])}
        style={{ color: `var(--${color})` }}
        href={href}
        target='_blank'
      >
        {children}
      </a>
      <span> </span>
    </>
  );
};

export default Atag;
