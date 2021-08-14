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

interface DataProps {
  id: number;
  name: string;
  stargazers_count: number;
  forks_count: number;
}

interface IRepository {
  id: number;
  name: string;
  stargazers_count: number;
  forks_count: number;
}
export default function dashboard() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<IUser>();
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  console.log(user);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const profileResponse = await api.get<IUser>(`${username}`);
      const reposResponse = await api.get<IRepository[]>(`${username}/repos`);

      if (reposResponse) {
        setRepositories(reposResponse.data);
      }
      console.log(reposResponse);

      // const respstarredResponseonse = await api.get<IUser>(`${username}`);
      if (profileResponse) {
        setUser(profileResponse.data);
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
      <main className={styles.container}>
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
                <p>{user.login}</p>
                <p>{user?.bio}</p>
              </div>
            </a>

            {repositories.map((repository) => (
              <a key={repository.id}>
                <div className={styles.repository}>
                  <strong>{repository.name}</strong>
                  <div>
                    <span>Starts:{repository.stargazers_count}</span>
                    <span>Forks:{repository.forks_count}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
