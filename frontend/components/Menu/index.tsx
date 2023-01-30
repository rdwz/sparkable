import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/svg/logo.svg";
import classNames from "classnames";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { selectIsMenuVisible, setMenuVisible } from "../../store/UIslice";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";

export const Menu = () => {
  const isVisible = useAppSelector(selectIsMenuVisible);
  const dispatch = useAppDispatch();
  const nodeRef = useRef(null);

  const onMenuHide = () => {
    dispatch(setMenuVisible(false));
  };

  return (
    <CSSTransition
      nodeRef={nodeRef} in={isVisible} timeout={400} classNames={{
        enterActive: styles.enterActive,
        enterDone: styles.enterDone,
        exitActive: styles.exitActive,
        exitDone: styles.exitDone,
      }}
    >
      <aside ref={nodeRef} className={classNames(styles.menuWrapper)}>
        <div className={styles.logoWrapper}>
          <button className={styles.closeButton} onClick={onMenuHide} />
          <Link href="/" className={styles.logo} onClick={onMenuHide}>
            <Image
              src={logo}
              alt="Sparkable logo"
            />
          </Link>
        </div>
        <nav className="">
          <Link
            href="/#explore"
            scroll={false}
            onClick={onMenuHide}
            className={styles.menuItem}
          >
            Explore
          </Link>
          <Link
            href=""
            onClick={onMenuHide}
            className={classNames(styles.menuItem, styles.disable)}
          >
            Submit
          </Link>
          <Link
            onClick={onMenuHide}
            href="/about"
            className={styles.menuItem}
          >
            About
          </Link>
          <Link
            href="/auth/signin"
            onClick={onMenuHide}
            className={classNames(styles.buttonPrimary, styles.sizeXl, styles.signin)}
          >
            Sign In
          </Link>
        </nav>
        <footer className={styles.menuFooter}>
          <Link
            href=""
            onClick={onMenuHide}
            className={classNames(styles.menuFooterLink, styles.disable)}
          >
            Contact
          </Link>
          <Link
            href=""
            onClick={onMenuHide}
            className={classNames(styles.menuFooterLink, styles.disable)}
          >
            Privacy Policy
          </Link>
        </footer>
      </aside>
    </CSSTransition>
  );
};