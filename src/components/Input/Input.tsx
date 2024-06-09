import { forwardRef } from "react";
import styles from "./Input.module.scss";
import { InputProps } from "./Input.types";
import cn from "classnames";

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref
) {
  return <input ref={ref} className={cn(styles.input, className)} {...props} />;
});

export default Input;
