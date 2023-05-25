import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './components/Header';
import Apropos from './components/Apropos'
import LocationPage from './components/LocationPage';
import Error from './components/Error'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    font-family: Montserrat; 
}
body {
  padding-left: 100px; 
  padding-right: 100px; 
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Apropos" element={<Apropos/>}/>
        <Route path="/location" element={<LocationPage/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

