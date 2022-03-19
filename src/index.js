import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            {/* context for light/dark mode */}
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
