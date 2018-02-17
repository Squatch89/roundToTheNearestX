import React, { Component } from 'react';
import RoundToX from './components/roundToX/roundToX.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Round To Nearest X</h1>
        </header>
        <RoundToX/>
      </div>
    );
  }
}

export default App;
