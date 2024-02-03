import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";

import { AuthProviderWrapper } from "./context/auth.context";
import { SelectedItemProviderWrapper } from './context/selectedItem.context.jsx';
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <SelectedItemProviderWrapper>
          <App />
        </SelectedItemProviderWrapper>
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>
);
