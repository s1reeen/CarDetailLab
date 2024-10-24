import css from "./Header.module.css";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div className={css.headerWrapper}>
      <header className={css.header}>
        <div className={css.headerBlock}>
          <a href="">
            <Logo color={"white"} className={css.headerLogo} />
          </a>
          <nav>
            <ul className={css.headerlist}>
              <li>Services</li>
              <li>Reviews</li>
              <li>Shop</li>
              <li>Blog</li>
              <li>Events</li>
            </ul>
          </nav>
        </div>
        <button type="submit" className={css.headerButton}>
          Contact Us
        </button>
      </header>
    </div>
  );
};
export default Header;
