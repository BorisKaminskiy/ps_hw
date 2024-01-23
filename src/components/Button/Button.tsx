"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import cn from "classnames";
import styles from "./Button.module.scss";
import Typography from "../Typography/Typography";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary";
  size?: "bg" | "sm";
}

const Button: FC<IButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  size,
  disabled,
  ...props
}) => {
  return (
    <button
      className={cn(
        styles.root,
        styles[variant],
        size && styles[size],
        disabled && styles.disabled
      )}
      onClick={onClick}
    >
      <Typography variant='t5' color='inherit'>
        {children}
      </Typography>
    </button>
  );
};

export default Button;
