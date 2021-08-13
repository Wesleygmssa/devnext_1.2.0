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
            Buscar por <span>Devs</span>{" "}
            <p>Veja seus repositórios e o mais acessados.</p>
          </h1>
        </section>
        <img
          src="https://d335luupugsy2.cloudfront.net/images%2Flanding_page%2F1314146%2Ftopo-email.jpg"
          alt="Image"
          width="500"
        />
      </main>
    </>
  );
}
