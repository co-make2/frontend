import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

//components
import {Login} from "./components/LoginPage";
import {Home} from "./components/HomePage";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" component={Login}/>
      <Route path="/home" component={Home}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
