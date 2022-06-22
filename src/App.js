import logo from './logo.svg';
import './App.css';
import { Analytics } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useEffect } from 'react';


function App({ signOut, user }) {

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
          Welcome {user.username}, To our React app.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={signOut}>Sign out</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
