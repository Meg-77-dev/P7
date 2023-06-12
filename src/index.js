import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/index.css'
import Home from './pages/Home';
import Nav from'./components/Nav';
import Footer from './components/Footer'
import Apropos from './pages/Apropos'
import LocationPage from './pages/LocationPage';
import Error from './pages/Error'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos/>}/>
        <Route path="/location/:id" element={<LocationPage/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);

