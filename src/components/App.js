import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import '../styles/App.css';
function App() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/form" id="form-link">
                  Section 1
                </Link>
              </li>
              <li>
                <Link to="/form-ref" id="form-ref-link">
                  Section 2
                </Link>
              </li>
              <li>
                <Link to="/form-state" id="form-state-link">
                  Section 3
                </Link>
              </li>
            </ul>
          </nav>
  
          <Routes>
            <Route path="/form" element={<Section1 />} />
            <Route path="/form-ref" element={<Section2 />} />
            <Route path="/form-state" element={<Section3 />} />
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;
