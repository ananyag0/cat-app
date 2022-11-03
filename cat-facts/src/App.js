import React from "react";
import {useState, useEffect} from "react";

// import logo from './logo.svg';
// import './App.css';

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    setFacts(data);
    console.log(data);

  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className = "container">
      <p> {facts.text} </p>
      <button onClick = {fetchData}> Give me a fact </button>
    </div>
  );
}

export default CatFacts;
