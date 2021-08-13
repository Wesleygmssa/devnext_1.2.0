/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "./dashboard.module.scss";
export default function dashboard() {
  async function getUser(user) {}
  return (
    <>
      <Head>
        <title>Document</title>
      </Head>
      <main>
        <h1 className={styles.title}>Explore repositórios no Github</h1>

        <form className={styles.form}>
          <input
            placeholder="Pesquisar usuários"
            // value={newRepo}
            // onChange={(e) => setNewRepo(e.target.value)} // evento de mudança
          />
          <button type="submit">Pesquisar</button>
        </form>
      </main>
    </>
  );
}
