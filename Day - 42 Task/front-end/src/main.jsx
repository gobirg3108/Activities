import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { UrlProvider } from './context/UrlContext';
import './App.css';

ReactDOM.render(
  <AuthProvider>
    <UrlProvider>
      <App />
    </UrlProvider>
  </AuthProvider>,
  document.getElementById('root')
);
