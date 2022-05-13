import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import App from './App'
import './index.css'
import Home from "./Home";
import Register from './Register'

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Navigate to ="/" />}/>
      <Route path="/" element={<App />} />
      <Route path="home" element={<Home />} />
      <Route path="register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);