import logo from './logo.svg';
import './App.css';

function App() {
  var person = {
    name: "Md. Abdullah",
    job: "Developer"
  }
  var style = {
    color: "green"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 style={style}>Name: {person.name}</h1>
        <h2 style={{backgroundColor: "red"}}>Job: {person.job}</h2>
      </header>
    </div>
  );
}

export default App;
