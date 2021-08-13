import { SignInButton } from "../SigninButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>Compasso Uol</h1>
        {/* <nav>
          <a href="">Home</a>
          <a href="">Post</a>
        </nav> */}

        <SignInButton />
      </div>
    </header>
  );
}
