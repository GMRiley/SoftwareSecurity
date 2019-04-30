import React from 'react';
import AppNav from "../Components/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Store from "./Store";
import Signup from "./Signup";

function App() {
  return (
    <Router path="/" component={App} className="app">
      <header className="App-header">
        <AppNav />
      </header>

      <Route path="/" exact component={Home} />
      <Route path="/store" component={Store} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Router>
  );
}

export default App;
