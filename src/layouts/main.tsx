import { Link, Outlet, useNavigate } from "react-router-dom";
import styles from "./main.module.scss";
import cartImg from "../assets/img/Cart.svg";
import { useState } from "react";

export const MainLayout = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <header className={styles.header} id="header">
        <div className={styles.header_inner}>
          <Link to={"/"}>
            <h1 className={styles.mainHeader}>Goods4you</h1>
          </Link>
          <nav className={styles.href}>
            <a onClick={() => navigate("/")} href="#product">
              Catalog
            </a>
            <a onClick={() => navigate("/")} href="#faq">
              FAQ
            </a>
            <Link className={styles.lastHref} to={"/cart"}>
              Cart
              <img alt="Иконка корзины" src={cartImg} />
              <span className={styles.cartCount}>1</span>
            </Link>
          </nav>
          <div onClick={() => setShowMenu(true)} className={styles.burger}>
            <hr />
            <hr />
            <hr />
          </div>
          {showMenu && (
            <div className={styles.showMenu}>
              <nav className={styles.hideMenu}>
                <a onClick={() => navigate("/")} href="#product">
                  Catalog
                </a>
                <a onClick={() => navigate("/")} href="#faq">
                  FAQ
                </a>
                <Link className={styles.lastHref} to={"/cart"}>
                  Cart
                  <img alt="Иконка корзины" src={cartImg} />
                  <span className={styles.cartCount}>1</span>
                </Link>
              </nav>
              <span onClick={() => setShowMenu(false)} className={styles.close}>
                X
              </span>
            </div>
          )}
        </div>

        <div>
          <hr className={styles.horizonLine} />
        </div>
      </header>
      <main className={styles.children}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <Link to={"/"}>
          <h1 className={styles.mainFooter}>Goods4you</h1>
        </Link>
        <nav className={styles.href}>
          <a onClick={() => navigate("/")} href="#product">
            Catalog
          </a>
          <a onClick={() => navigate("/")} href="#faq">
            FAQ
          </a>
        </nav>
      </footer>
    </div>
  );
};
