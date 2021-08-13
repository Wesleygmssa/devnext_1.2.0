/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "./home.modules.scss";
export default function Home() {
  return (
    <>
      <Head>
        <title>Document</title>
      </Head>
      <main>
        <section>
          <span>Hey, welcome</span>
          <h1>
            Buscar por <span>Devs</span>{" "}
          </h1>
          <p>Veja seus repositórios e o mais acessados.</p>
        </section>
        <img
          src="https://d335luupugsy2.cloudfront.net/images%2Flanding_page%2F1314146%2Ftopo-email.jpg"
          alt="Image"
        />
      </main>
    </>
  );
}
