import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppLo } from 'components/AppLo';
// import { App } from 'components/App';

import { BrowserRouter } from 'react-router-dom';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/routes">
      <AppLo />
      {/* <App /> */}

    </BrowserRouter>
  </React.StrictMode>
);

