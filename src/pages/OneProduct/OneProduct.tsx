import React from "react";
import Button from "../../components/Button/Button";
import styles from "./OneProduct.module.scss";
import pumaSnik from "../../assets/img/One.jpg";
import pumaSnikSmall from "../../assets/img/smallOne.jpg";
import star from "../../assets/img/Star.svg";

export const Product = () => {
  const smallIcons = Array.from({ length: 6 }, (_, index) => {
    return <img key={index} src={pumaSnikSmall} />;
  });
  const startRating = Array.from({ length: 5 }, (_, index) => {
    return <img width="16px" key={index} src={star} />;
  });
  return (
    <div className={styles.container}>
      <p className={styles.nameCart}>Product 5</p>
      <section className={styles.productItem}>
        <div className={styles.productImgDescr}>
          <div className={styles.productImg}>
            <div className={styles.imgBigInner}>
              <img className={styles.imgBig} src={pumaSnik} />
            </div>
            <div className={styles.imgSmall}>{smallIcons}</div>
          </div>
          <div className={styles.description}>
            <h1 className={styles.headerH1}>Puma Force 1 Shadow</h1>
            <div className={styles.rating}>
              <p>Rating</p>
              <div className={styles.stars}>{startRating}</div>
            </div>
            <p>
              Base price <span>500$</span>
            </p>
            <p>
              Discount percentage <span>10%</span>
            </p>
            <p>
              Discount price <span>450$</span>
            </p>
            <p>
              Stock <span>13</span>
            </p>
            <p>
              Brand <span>Puma</span>
            </p>
            <p>
              Category <span>Smartphones</span>
            </p>
            <p>
              Description{" "}
              <span>An apple mobile which is nothing like apple</span>
            </p>
            <Button className={styles.buttonAddToCart} appearance="big">
              Add to cart
            </Button>
          </div>
        </div>
        <div className={styles.uniqId}>
          SKU ID <span>0005</span>
        </div>
      </section>
    </div>
  );
};
