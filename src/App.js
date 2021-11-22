import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div>
            <Link to="/">Home</Link>{' '}
            <Link to="/about">About</Link>{' '}
            <Link to="/contact">Contact</Link>{' '}
            <Routes>
              <Route exact path="/" element={< Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route render={ () => <h2> Page not found </h2>} />
            </Routes>
          </div>
      </BrowserRouter>
    </div>  
  );
}

export default App;
