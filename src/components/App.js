import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link id="form-link" to="/form">Form</Link>
          </li>
          <li>
            <Link id="form-ref-link" to="/form-ref">Form Ref</Link>
          </li>
          <li>
            <Link id="form-state-link" to="/form-state">Form State</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/form-ref" element={<FormRef />} />
        <Route path="/form-state" element={<FormState />} />
      </Routes>
    </div>
  </Router>
);

export default App;
