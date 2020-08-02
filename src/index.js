import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// import Buttons from './components/buttons'
// import Screen from './components/screen'

// ReactDOM.render(
//   <React.StrictMode>
//     <Screen />
//   </React.StrictMode>,
//   document.getElementById('screen')
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <Buttons />
//   </React.StrictMode>,
//   document.getElementById('button')
// );
import Calc from './components/calc'

ReactDOM.render(
  <React.StrictMode>
    <Calc />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
