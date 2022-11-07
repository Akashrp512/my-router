import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
//there are other types of routers like History Router, HashRouter(useful when working with shared Server), MemoryRouter(stores history on memory doesn't relay on url.  useful when "Testing"),staticRouter(specifically working on servers), and Native Router  which will be used frequently

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);


