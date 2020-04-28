import React, { useState, useEffect } from "react";
import "./App.css";
import PostForm from "./PostForm";
import Post from "./Post";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//components
import { Login } from "./components/LoginPage";
import { Home } from "./components/HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Post />
        <Switch>
          <Route path="/" component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
