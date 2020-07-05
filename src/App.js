import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import home from './components/Home';
import about from './components/About';
import './App.css';
import tictactoe from './tictactoe/tictactoe'

function App() {
  return (
    <div>
      <Route exact={true} path="/" component={home} />
      <Route path="/about" component={about} />
      <Route path="/tictactoe" component={tictactoe} />
    </div>
  );
}

export default App;
