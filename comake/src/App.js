import React, { useState, useEffect } from "react";
import "./App.css";
import PostFile from "./PostFile";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//components
import { Login } from "./components/LoginPage";
import { Home } from "./components/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <PostFile />
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
