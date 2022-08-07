import React from 'react';
import ReactDOM from 'react-dom/client';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {BrowserRouter} from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
