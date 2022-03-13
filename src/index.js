import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth';
import firebaseApp, { database, functions } from './service/firebase'
import GithubService from './service/github';
import DBService from './service/database';

const authService = new AuthService(firebaseApp);
const githubService = new GithubService();
const dbService = new DBService(database);

ReactDOM.render(
  <React.StrictMode>
    <App //
      authService={authService}
      githubService={githubService}
      dbService={dbService}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
