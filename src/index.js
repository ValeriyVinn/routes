import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'components/React/Module1/Emotion/constants/theme';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/routes">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
