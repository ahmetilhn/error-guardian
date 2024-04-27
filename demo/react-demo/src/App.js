import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import ErrorGuardian from "error-guardian";
function App() {
  const errorGuardian = new ErrorGuardian();
  const handleError = () => {
    throw new Error("Test Error");
  };
  useEffect(() => {
    errorGuardian.init();
  }, []);
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
        <button onClick={handleError}>Handle Error</button>
      </header>
    </div>
  );
}

export default App;
