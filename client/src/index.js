import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      //background color
      main: "#000000"
    },
    secondary: {
      //nav/footer color
      main: "#2671D6"
    },
    text: {
      primary: "#fff"
    },
    common: {
      black: "#fff"
    },
    error: {
      main: "#fff"
    },
    background: {
      paper: "#000000"
    }
  
  },
  typography:{
    fontFamily:'gotham'
  }
})


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
