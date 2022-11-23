import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import keycloak from "./Keycloak";

window.keycloak= keycloak

function initKeycloak() {
  keycloak.init({
    onLoad: 'login-required'
  }).then(function(authenticated) {
      console.log('authenticated', authenticated)
      if(authenticated){
        renderRoot()
      }
  }).catch(function() {
      console.error('failed to initialize');
  });
}


initKeycloak()

function renderRoot(){
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();