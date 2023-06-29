import React, { useEffect } from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="form" element={<Contact/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
