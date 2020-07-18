import React from 'react';
import logo from './logo.svg';
import './App.css';
import image from '../src/20200711_120955.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Gaya

          
        </p>
        <p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          
        >
        
        <img class = "sets"
              src={image}
        />
          
        </a>
      </header>
    </div>
  );
}

export default App;
