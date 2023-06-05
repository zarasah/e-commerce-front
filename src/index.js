import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
// import store from './store/testindex';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme } from './theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme = {theme}>
    <CssBaseline />
    <Provider store = {store}>
      <App />
    </Provider>
  </ThemeProvider>
);
