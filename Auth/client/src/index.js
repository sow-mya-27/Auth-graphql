import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import client from "./apolloClient";
import { ApolloProvider } from '@apollo/client';
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./context/authContext";
import axios from 'axios'

axios.interceptors.request.use(request=>{
  console.log(request)
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
      </BrowserRouter>
  </ApolloProvider>
  </AuthProvider>
  

 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
