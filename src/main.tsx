import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { App } from './App';
import './index.css';

axios.defaults.baseURL = import.meta.env.VITE_YOUTUBE_CORE_RAPID_BASE_URL;
axios.defaults.headers.post.Accept = 'application/json';
axios.defaults.headers.get['X-RapidAPI-Key'] = import.meta.env.VITE_YOUTUBE_CORE_RAPID_API_KEY;
axios.defaults.headers.get['X-RapidAPI-Host'] = import.meta.env.VITE_YOUTUBE_CORE_RAPID_API_URL;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />,
);
