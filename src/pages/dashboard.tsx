/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { FormEvent, useCallback, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from "../services/api";
import styles from "./dashboard.module.scss";

interface IUser {
  avatar_url: string;
  login: string;
  name: string;
  bio: string;
  location: string;
  company: string;
  twitter_username: string;
}
export default function dashboard() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<IUser>();

  console.log(user);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const response = await api.get<IUser>(`${username}`);
      if (response) {
        setUser(response.data);
      }
    },
    [username]
  );

  async function getUser(user: IUser) {}
  return (
    <>
      <Head>
        <title>Document</title>
      </Head>
      <main>
        <h1 className={styles.title}>Explore repositórios no Github</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            placeholder="Pesquisar usuários"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // evento de mudança
          />
          <button type="submit">Pesquisar</button>
        </form>

        {user?.name && (
          <div className={styles.respositories}>
            <a key={user?.name} href={`/repositories/${user?.name}`}>
              <img src={user?.avatar_url} alt={user?.name} />

              <div>
                <strong>{user?.name}</strong>
                <p>{user?.bio}</p>
              </div>

              <FiChevronRight size={20} />
            </a>
          </div>
        )}
      </main>
    </>
  );
}
