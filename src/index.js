import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Cartprovider } from './Cart/index'

ReactDOM.render(
  <React.StrictMode>
    <Cartprovider>
      <App />
    </Cartprovider>
  </React.StrictMode>,
  document.getElementById('root')
);
