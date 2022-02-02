import React from 'react';
import ReactDOM from 'react-dom';

// App
import App from './App';

// styles
import './main.scss';

// context
import { ThemeToggleProvidor } from './context/theme/ThemeToggleContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeToggleProvidor>
      <App />
    </ThemeToggleProvidor>
  </React.StrictMode>,
  document.getElementById('root')
);
