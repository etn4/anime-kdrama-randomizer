import React from 'react';
import './App.css';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <div class="top-container">
        <h1 class="title">Anime/Kdrama Randomizer</h1>
      </div>

      {/* old code */}
      {/* <header class="topnav">
        <a class= "active" href="#home">Home</a>
        <div class="topnav-right">
            <a href="">Search</a>
            <p>About</p>
        </div>
    </header>
    <div class="top-container">
        <h1 class="title">Anime/Kdrama Randomizer</h1>
    </div> */}
    </div>
  );
}

export default App;
