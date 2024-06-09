// смотри семантику, верно ли все
import styles from "./Home.module.scss";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import allSneakers from "../../../src/constant/db.json";
import { CartProduct } from "../../components/CartProduct/CartProduct";
import plus from "../../assets/img/+.svg";
import { useState } from "react";

export const Home = () => {
  const [questionOne, setQuestionOne] = useState<boolean>(false);
  const [questionTwo, setQuestionTwo] = useState<boolean>(false);
  return (
    <div>
      <section className={styles.info}>
        <span className={styles.background_letter}>Goods4you</span>
        <p className={styles.slogan}>
          Any products from famous brands with worldwide delivery
        </p>
        <p className={styles.whatWeSale}>
          We sell smartphones, laptops, clothes, shoes and many other products
          at low prices
        </p>
        <a className={styles.anchorButton} href="#product">
          <Button className={styles.button} appearance="big">
            Go to shopping
          </Button>
        </a>
      </section>
      <section id="product" className={styles.catalog}>
        <p className={styles.catalog_paragraph}>Catalog</p>
        <div className={styles.searchGroup}>
          <Input placeholder="Search by title" className={styles.input} />
          <Button appearance="big">Search</Button>
        </div>
        <div className={styles.cartProduct_container}>
          {allSneakers.map((item) => (
            <CartProduct key={item.id} allSneakers={item} />
          ))}
        </div>
        <div className={styles.buttonProductCart}>
          <Button appearance="big">Show more</Button>
        </div>
      </section>
      <section id="faq" className={styles.questions}>
        <div className={styles.faq}>
          <h2 className={styles.faqItem}>FAQ</h2>
          <hr className={styles.horizonLine} />
          <div
            onClick={() => setQuestionOne(!questionOne)}
            className={styles.questionsItemInner}
          >
            <p className={styles.questionsItem}>Question 1</p>
            <img
              className={questionOne ? styles.plus45 : styles.plus0}
              src={plus}
            />
          </div>
          {questionOne && (
            <p className={styles.showAnswer}>
              Long answer to the first question
            </p>
          )}
          <hr className={styles.horizonLine} />
          <div
            onClick={() => setQuestionTwo(!questionTwo)}
            className={styles.questionsItemInner}
          >
            <p className={styles.questionsItem}>Question 2</p>
            <img
              className={questionTwo ? styles.plus45 : styles.plus0}
              src={plus}
            />
          </div>
          {questionTwo && (
            <p className={styles.showAnswer}>
              Long answer to the first question
            </p>
          )}
          <hr className={styles.horizonLine} />
        </div>
      </section>

      {/* <section id="faq" className={styles.questions}>
      <div className={styles.faq}>
        <h2 className={styles.faqItem}>FAQ</h2>
        <hr className={styles.horizonLine} />
        <div
          onClick={() => setQuestionOne(!questionOne)}
          className={styles.questionsItemInner}
        >
          <p className={styles.questionsItem}>Question 1</p>
          <img
            className={questionOne ? styles.plus45 : styles.plus0}
            src={plus}
          />
        </div>
        {questionOne && (
          <p className={styles.showAnswer}>
            Long answer to the first question
          </p>
        )}
        <hr className={styles.horizonLine} />
        <div
          onClick={() => setQuestionTwo(!questionTwo)}
          className={styles.questionsItemInner}
        >
          <p className={styles.questionsItem}>Question 2</p>
          <img
            className={questionTwo ? styles.plus45 : styles.plus0}
            src={plus}
          />
        </div>
        {questionTwo && (
          <p className={styles.showAnswer}>
            Long answer to the first question
          </p>
        )}
        <hr className={styles.horizonLine} />
      </div>
    </section> */}
    </div>
  );
};
