import React, { Component } from "react";
import CatFacts from './CatFacts';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Cat Facts</h1>
     <p style={{fontWeight: 'bold'}}>Current Fact</p>
     <CatFacts/>
    </div>
  );
}

export default App;


