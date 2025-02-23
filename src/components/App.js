import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "../styles/App.css";
import Section3 from "./Section3";
import Section1 from "./Section1";
import Section2 from "./Section2";

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
        <Switch>
          <Route path="/form" component={Section1} />
          <Route path="/form-ref" component={Section2} />
          <Route path="/form-state" component={Section3} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
