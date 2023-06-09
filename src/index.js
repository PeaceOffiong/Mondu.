import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/footer.css";
import "./styles/globals.css";
import "./styles/footer.css";
import "./styles/home.css";
import './styles/Navbar.css';
import "./styles/article.css"
import "./styles/feature.css";
import "./styles/contacts.css";
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/context";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

