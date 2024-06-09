import { IButtonProps } from "./Button.types";
import cn from "classnames";
import styles from "./Button.module.scss";

const Button = ({
  children,
  className,
  appearance = "small",
  ...props
}: IButtonProps) => {
  return (
    <button
      className={cn(styles["button"], className, {
        [styles["big"]]: appearance === "big",
        [styles["small"]]: appearance === "small",
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
