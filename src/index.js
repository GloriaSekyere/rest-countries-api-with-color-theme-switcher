import React from 'react';
import ReactDOM from 'react-dom';
import { ModeProvider } from './context/ModeContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ModeProvider>
      <App />
    </ModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
