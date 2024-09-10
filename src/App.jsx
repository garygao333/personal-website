import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx'; 
import About from './pages/about.jsx';
import './chatbot.css';

function App() {
  return (
      <Router>
          <div className="App">
              {/* Define routes within a Routes component */}
              <Routes>
                  <Route path="/" element={<Homepage />} exact />
                  <Route path="/about" element={<About />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;