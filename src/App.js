import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <header>
        <h1>LOTR Memory Card</h1>
        <p>Don't click the same card twice!</p>
      </header>
      <main>
        <Game />
      </main>
      <footer>
        <p>
          By <a href="https://github.com/roesparc/">roesparc</a>
        </p>
        <a href="https://github.com/roesparc/">
          <i className="fa-brands fa-github"></i>
        </a>
      </footer>
    </div>
  );
}

export default App;
