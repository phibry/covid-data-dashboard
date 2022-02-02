import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import App from './App';

// themecontext
import { ThemeToggleProvidor } from './context/theme/ThemeToggleContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeToggleProvidor>
      <App />
    </ThemeToggleProvidor>
  </React.StrictMode>,
  document.getElementById('root')
);
