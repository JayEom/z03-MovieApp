import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Navigation from './components/Navigation';
import About from "./routes/About";
import Home from "./routes/Home";

function App(params) {
  return (
    <HashRouter>
      <Navigation />

      <Route path="/" exact={true} component={Home}  />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;