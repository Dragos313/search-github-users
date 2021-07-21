import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';
// dev-sj9dwvc4.us.auth0.com
// KR2N9zrxXpDVY4sGUHr3dD2VdqqOLlbm
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-sj9dwvc4.us.auth0.com"
    clientId="KR2N9zrxXpDVY4sGUHr3dD2VdqqOLlbm"
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
    >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
