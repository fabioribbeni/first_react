import logo from './logo.svg';
import './App.css';

const date = new Date();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <h1> Ciao! Questa è la mia prima prova con React!</h1>
      </main>
      <footer>
        <p>
          Copyright by Me © {date.getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
