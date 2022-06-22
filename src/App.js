import logo from './logo.svg';
import './App.css';
import { Analytics } from 'aws-amplify';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    Analytics.record({ name: "HomePage" });
    Analytics.record({
      name: "UserSignIn",
      attributes: {
        userName: "Bari mehdi",
      }
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. with amplify By bari mehdi.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
