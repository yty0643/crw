import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth';
import firebaseApp from './service/firebase'
import GithubService from './service/github';

const authService = new AuthService(firebaseApp);
const githubService = new GithubService();

ReactDOM.render(
  <React.StrictMode>
    <App //
      authService={authService}
      githubService={githubService}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
