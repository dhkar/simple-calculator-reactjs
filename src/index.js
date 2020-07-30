import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import './index.css';
// import App from './App';
import Buttons from './components/buttons'
import Screen from './components/screen'

ReactDOM.render(
  <React.StrictMode>
    <Screen />
  </React.StrictMode>,
  document.getElementById('screen')
);

ReactDOM.render(
  <React.StrictMode>
    <Buttons />
  </React.StrictMode>,
  document.getElementById('button')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
