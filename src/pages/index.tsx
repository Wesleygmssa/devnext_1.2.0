/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "./home.module.scss";
export default function Home() {
  return (
    <>
      <Head>
        <title>Document</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.here}>
          <span>Hey, welcome</span>
          <h1>
            Buscar por <span>Devs</span> <p>Veja seus repositórios.</p>
          </h1>
        </section>
        <img
          src="https://nerdin.com.br/img/empresa/1363.png"
          alt="Image"
          width="500"
        />
      </main>
    </>
  );
}
