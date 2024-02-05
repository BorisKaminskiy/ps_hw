import cn from "classnames";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  forwardRef,
  ForwardedRef,
} from "react";

import styles from "./Input.module.scss";

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant?: "lg";
  kind?: "primary" | "secondary";
  errors?: string;
}

// eslint-disable-next-line react/display-name
const Input = forwardRef(
  (
    { variant = "lg", kind = "primary", ...props }: IInputProps,

    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <>
        <input
          className={cn(
            styles.root,
            variant && styles[variant],
            kind && styles[kind],
            props.errors && styles.error
          )}
          {...props}
          ref={ref}
        />
        {props.errors && (
          <p className={cn(styles.error_message)} role='alert'>
            {props.errors}
          </p>
        )}
      </>
    );
  }
);

export default Input;
