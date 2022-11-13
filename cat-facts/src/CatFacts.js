import React from "react";
import { useState, useEffect } from "react";

function CatFacts() {
    const [facts, setFacts] = useState([]);
    const [pFacts, setPFacts] = useState([]);
    const [fav, setFav] = useState(false);
    const [counter, setCounter] = useState(0);
    const fetchData = async () => {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        if (facts != null && facts.fact != null) {
            pFacts.unshift({favorite: fav, fact: facts.fact});
            setFav(false);
        }
        setPFacts(pFacts);
        setFacts(data);
    };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    
    <div className = 'container'>
      <p id = "fact"> {facts.fact} </p>
      <button className = "button" onClick = {fetchData}> Give me a fact! </button>
      <p button = "facts-list">Here are your previously generated facts: </p>
    </div>
  );

  }

  export default CatFacts;