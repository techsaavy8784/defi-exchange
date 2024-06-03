import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserProvider from './components/providers/UserProvider';
import PresaleProvider from './components/providers/PresaleProvider';
import WalletProvider from './components/providers/WalletProvider';


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <PresaleProvider>
        <App />
      </PresaleProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


