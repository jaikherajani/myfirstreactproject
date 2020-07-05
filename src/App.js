import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import home from './components/Home';
import about from './components/About'
import './App.css';

function App() {
  return (
    <div>
      <Route exact={true} path="/" component={home} />
      <Route path="/about" component={about} />
    </div>
  );
}

export default App;
