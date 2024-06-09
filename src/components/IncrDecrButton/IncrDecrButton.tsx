import Button from "../Button/Button";
import styles from "./IncrDecrButton.module.scss";
import plus from "../../assets/img/plus.svg";
import minus from "../../assets/img/minus.svg";

export const IncrDecrButton = () => {
  return (
    <div className={styles.buttonOnCart}>
      <Button className={styles.decrement}>
        <img alt="удалить" src={minus} />
      </Button>
      <input className={styles.inputOnCart} value={1} />
      <Button className={styles.increment}>
        <img alt="добавить" src={plus} />
      </Button>
    </div>
  );
};
