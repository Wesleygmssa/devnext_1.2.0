/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "./home.module.scss";
export default function dashboard() {
  return (
    <>
      <Head>
        <title>Document</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.here}>
          <span>Hey, welcome</span>
        </section>
      </main>
    </>
  );
}
