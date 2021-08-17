import { FaGithub } from "react-icons/fa";
import { SignInButton } from "../SigninButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <FaGithub color="#eba417" size="70" />

        <SignInButton />
      </div>
    </header>
  );
}
