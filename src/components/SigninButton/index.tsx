import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, useSession, signOut } from "next-auth/client";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function SignInButton() {
  const [session] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  }, [session]);

  return session ? (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => {
        signOut();
      }}
    >
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#b8c6f7" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signInButton}
      onClick={() => {
        signIn("github");
      }}
    >
      <FaGithub color="#eba417" />
      Entrar com GitHub
    </button>
  );
}
