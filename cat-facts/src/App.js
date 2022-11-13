import React, { Component } from "react";
import CatFacts from './CatFacts';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Cat Facts Generator</h1>
     <img src="https://media.istockphoto.com/photos/many-cats-sitting-in-a-row-isolated-on-white-picture-id889499124?k=20&m=889499124&s=612x612&w=0&h=ujaZadNxcS4RQl3V9r0OZxxZa0wWDCctuw2vUKHBZeA=" height="50"></img>
     <CatFacts/>
    </div>
  );
}

export default App;


