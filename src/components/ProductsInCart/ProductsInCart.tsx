import styles from "./ProductsInCart.module.scss";
import snikers from "../../assets/img/snikersOnCart.jpg";
import { Link } from "react-router-dom";
import { IncrDecrButton } from "../IncrDecrButton/IncrDecrButton";

export const ProductsInCart = () => {
  return (
    <div className={styles.productInCartItem}>
      <Link to="/product/1">
        <div className={styles.snikersImg}>
          <img alt="иконка кроссовок" src={snikers} />
        </div>
      </Link>
      <div className={styles.namePrice}>
        <p className={styles.fontBold}>Essence Mascara Lash Princess</p>
        <p className={styles.fontSize}>110 $</p>
      </div>
      <IncrDecrButton />
      <button className={styles.buttonDelete}>Delete</button>
    </div>
  );
};
