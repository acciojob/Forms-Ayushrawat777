import React, { useRef ,useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../styles/App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <h1>Form Handling App</h1>
        <nav>
          <Link to="/form" id="form-link">Form</Link>
          <Link to="/form-ref" id="form-ref-link">Form with useRef</Link>
          <Link to="/form-state" id="form-state-link">Form with useState</Link>
        </nav>
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/form-ref" element={<FormRef />} />
          <Route path="/form-state" element={<FormState />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// Form.js
const Form = () => { 
  const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Submitted:");
};
  return (
    <div className="card">
      <h2>Basic Form</h2>
      <form id="info-form" onSubmit={handleSubmit}>
        <input id="full_name" type="text" placeholder="Full Name" />
        <input id="email" type="email" placeholder="Email" />
        <input id="password" type="password" placeholder="Password" />
        <input id="password_confirmation" type="password" placeholder="Confirm Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// FormRef.js

const FormRef = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", nameRef.current.value, emailRef.current.value);
  };

  return (
    <div className="card">
      <h2>Form with useRef</h2>
      <form id="info-form" onSubmit={handleSubmit}>
        <input ref={nameRef} id="full_name" type="text" placeholder="Full Name" />
        <input ref={emailRef} id="email" type="email" placeholder="Email" />
        <input ref={passwordRef} id="password" type="password" placeholder="Password" />
        <input ref={confirmPasswordRef} id="password_confirmation" type="password" placeholder="Confirm Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};





