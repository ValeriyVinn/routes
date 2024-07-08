import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import  AppLo  from 'componentsLo/AppLo';
import  AppDraft from 'compoDraft/AppDraft.jsx'

import { BrowserRouter } from 'react-router-dom';
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/routes">
      <AppLo />
      {/* <App /> */}
      <AppDraft />

    </BrowserRouter>
  </React.StrictMode>
);

