import React from 'react';
import ReactDOM from 'react-dom';

// App
import App from './App';

// styles
import './main.scss';

// context
import { ThemeToggleProvidor } from './context/theme/ThemeToggleContext';
import { OpenDataSwissProvidor } from './context/openDataSwiss/OpenDataSwissContext';

ReactDOM.render(
  <React.StrictMode>
    <OpenDataSwissProvidor>
      <ThemeToggleProvidor>
        <App />
      </ThemeToggleProvidor>
    </OpenDataSwissProvidor>
  </React.StrictMode>,
  document.getElementById('root')
);
