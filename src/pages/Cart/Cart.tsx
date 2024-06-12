import styles from "./Cart.module.scss";
import { ProductsInCart } from "../../components/ProductsInCart/ProductsInCart";

export const Cart = () => {
  /* тестовый коммент */
  return (
    <div className={styles.container}>
      <p className={styles.cartName} id="cartName">
        My cart
      </p>
      <section className={styles.productInCart}>
        <div className={styles.innerProductInCart}>
          <ProductsInCart />
          <ProductsInCart />
          <ProductsInCart />
        </div>
        <div className={styles.prices}>
          <p className={styles.totalCount}>
            Total count: <span>3</span>
          </p>
          <p className={styles.totalPrice}>
            Total price: <span> 700$</span>
          </p>
          <p className={styles.totalPriceDiscount}>
            Total price with discount: <span>590$</span>
          </p>
        </div>
      </section>
    </div>
  );
};
