import Game from "./components/Game";
import styles from "./styles/App.module.css";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>LOTR Memory Card</h1>
        <p>Don't click the same card twice!</p>
      </header>
      <main className={styles.main}>
        <Game />
      </main>
      <footer className={styles.footer}>
        <p>
          By <a href="https://github.com/roesparc/">roesparc</a>
        </p>
        <a href="https://github.com/roesparc/">
          <FaGithub className={styles.githubLogo} />
        </a>
      </footer>
    </div>
  );
}

export default App;
