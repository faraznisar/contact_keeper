import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/ContactState";

import "./App.css";

function App() {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </div>
          </div>
        </Router>
      </ContactState>
    </AuthState>
  );
}

export default App;
