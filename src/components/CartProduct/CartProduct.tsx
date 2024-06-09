import styles from "./CartProduct.module.scss";
import Button from "../../components/Button/Button";
import cardImg from "../../assets/img/Cart.svg";
import { Link } from "react-router-dom";
import { IncrDecrButton } from "../IncrDecrButton/IncrDecrButton";

interface snickersItem {
  id: number;
  name: string;
  image: string;
  price: number;
  count: number;
}

interface IPropsSnickers {
  allSneakers: snickersItem;
}

export const CartProduct = ({ allSneakers }: IPropsSnickers) => {
  return (
    <div className={styles.cartProduct}>
      <Link to={`product/${allSneakers.id}`}>
        <div className={styles.imgInner}>
          <img className={styles.oneSnickersImg} src={allSneakers.image} />
          <div className={styles.oneSnickersImgInner}></div>
        </div>
      </Link>
      <div className={styles.aboutProduct}>
        <div>
          <p
            className={
              allSneakers.id !== 2
                ? styles.aboutProduct_paragraph
                : styles.aboutProduct_paragraph_trim
            }
          >
            {allSneakers.name}
          </p>
          <p className={styles.aboutProduct_price}>{allSneakers.price} $</p>
        </div>
        {allSneakers.id !== 2 ? (
          <Button className={styles.buttonImg} appearance="small">
            <img
              className={styles.cartProductImg}
              alt="Иконка корзины"
              src={cardImg}
            />
          </Button>
        ) : (
          <IncrDecrButton />
        )}
      </div>
    </div>
  );
};
