import React, { useState, useEffect } from "react";
import "./App.css";
import PostFile from "./PostFile";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//components
import { Login } from "./components/LoginPage";
import { Register } from "./components/RegisterPage";
import { Posts } from "./components/PostsPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">

        <PostFile />
        <Switch>
          <Route path="/" component={Login} />
        </Switch>

        <header>
          <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/posts">Local Issues</Link>
          </nav>
        </header>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/posts" component={Posts} />

      </div>
    </Router>
  );
}

export default App;
