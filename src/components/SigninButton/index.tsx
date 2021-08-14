/* eslint-disable react-hooks/exhaustive-deps */
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, useSession, signOut } from "next-auth/client";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function SignInButton() {
  const [session] = useSession();
  const router = useRouter();

  /**
   *  Verificando se usuário esta autenticado no gitHub
   * @param {*} session retorando um objeto com dados usuário
   * Ex: name, email. etc...
   * Fazendo a verificando quando correr uma mudança no session
   */
  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  }, [session]);

  return session ? (
    <div className={styles.containerButton}>
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
    </div>
  ) : (
    <div className={styles.containerButton}>
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
    </div>
  );
}
