import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseMemo from './UseMemo';
import UseReducer from './UseReducer';
import UseReducer_pr from './UseReducer_pr';
import UseReducer_pr2 from './UseReducer_pr2';
import UseReducer_pr3 from './UseReducer_pr3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseReducer_pr3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
