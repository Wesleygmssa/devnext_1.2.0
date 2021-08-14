/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { FormEvent, useCallback, useState } from "react";
import { Link as LinkScroll } from "react-scroll";
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

  async function handleGetRepository(activeRepo) {
    if (activeRepo) {
      const reposResponse = await api.get<IRepository[]>(
        `${username}/${activeRepo}`
      );
      setRepositories(reposResponse.data);
    }
  }

  async function handleGetStarred(Starred) {
    if (Starred) {
      const reposResponse = await api.get<IRepository[]>(
        `${username}/${Starred}`
      );
      setRepositories(reposResponse.data);
    }
  }

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const profileResponse = await api.get<IUser>(`${username}`);

      // const respstarredResponseonse = await api.get<IUser>(`${username}`);
      if (profileResponse) {
        setUser(profileResponse.data);
      }
    },
    [username]
  );

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
            <div className={styles.groupButton}>
              <LinkScroll
                className={styles.button}
                to="table"
                smooth
                duration={2000}
                onClick={() => {
                  handleGetRepository("repos");
                }}
              >
                Visualizar Repositórios
              </LinkScroll>
              <LinkScroll
                className={styles.button}
                to="table"
                smooth
                duration={2000}
                onClick={() => {
                  handleGetRepository("starred");
                }}
              >
                Mais visitados
              </LinkScroll>
            </div>

            <div>
              {/* {repositories ? <h2>Repositórios</h2> : ""} */}

              {repositories.map((repository) => (
                <>
                  <a key={repository.id}>
                    <div className={styles.repository}>
                      <strong>{repository.name}</strong>
                      <div>
                        <span>Starts:{repository.stargazers_count}</span>
                        <span>Forks:{repository.forks_count}</span>
                      </div>
                    </div>
                  </a>
                </>
              ))}
            </div>
          </div>
        )}
        <div id="table" />
      </main>
    </>
  );
}
