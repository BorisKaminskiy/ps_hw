import {
  DetailedHTMLProps,
  ForwardedRef,
  TextareaHTMLAttributes,
  forwardRef,
} from "react";
import { FieldError } from "react-hook-form";
import cn from "classnames";
import styles from "./Textarea.module.scss";

interface ITextareaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  errors?: string;
}

// eslint-disable-next-line react/display-name
const Textarea = forwardRef(
  ({ ...props }: ITextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
      <>
        <textarea
          {...props}
          className={cn(styles.textarea, props.errors && styles.error)}
          ref={ref}
        />
        {props.errors && (
          <p className={cn(styles.error_message)}>{props.errors}</p>
        )}
      </>
    );
  }
);

export default Textarea;
