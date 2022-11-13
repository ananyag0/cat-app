import React from "react";
import { useState, useEffect } from "react";

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    setFacts(data);
    const printOut = data.fact;
    // console.log(facts);
    // var array = {...facts, data.facts};
   console.log(data);

  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    
    <div className = 'container'>
      <p id = "fact"> {facts.fact} </p>
      <button className = "button" onClick = {fetchData}> Give me a fact </button>
    </div>
  );
}


export default CatFacts;