import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// importar Firebase en el Main para poder usarlo en toda la app

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeoyadBSPnVTEnIHHKb5XCvrYVQDfSsUY",
  authDomain: "tienda-react-js.firebaseapp.com",
  projectId: "tienda-react-js",
  storageBucket: "tienda-react-js.appspot.com",
  messagingSenderId: "629961027123",
  appId: "1:629961027123:web:793498dce401aa68a43d46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
