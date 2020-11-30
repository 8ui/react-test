import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// REACT ROUTER
import { BrowserRouter } from 'react-router-dom'
// MOBX
import { store } from 'core'
// STYLES
import './index.scss';

import App from './App';


const StoreContext = React.createContext();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1565c0',
    },
    success: {
      main: '#4caf50',
    },
  },
  overrides: {
    MuiTab: {
      wrapper: {
        flexDirection: 'row',
      },
    },
  },
});

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
