import React from "react";
import { useState, useEffect } from "react";

function CatFacts() {

    let count =0;
    const [facts, setFacts] = useState([]);
    const [pFacts, setPFacts] = useState([]);
    const [fav, setFavorite] = useState(false);
    const [counter, setCounter] = useState(0);
    const fetchData = async () => {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        if (facts != null && facts.fact != null) {
            pFacts.unshift({favorite: fav, fact: facts.fact});
            setFavorite(false);
        }
        setPFacts(pFacts);
        setFacts(data);
    };

    const update = (index) => {
        const copyArr = [...pFacts];
        const element = copyArr[index];
        element.favorite = !element.favorite;
        copyArr[index] = element;
        setPFacts(copyArr);
    }

    const nextFacts = () => {
        setCounter(Math.min(counter+10, pFacts.length - pFacts.length % 10));
    }
    const previousFacts = () => {
        setCounter(Math.max(0, counter-10));
    }
    const favorite = () => {
        setFavorite(true);
    }

  useEffect(() => {
    count++;
    fetchData();
  }, []);
  return (
    
    <div className = 'container'>
      <p id = "fact"> {facts.fact} </p>
      <button className = "button" onClick = {fetchData}> Give me a fact! </button>
      <p button = "facts-box">Here are your previously generated facts: </p>
        {
            pFacts.filter((_, index) => index >= counter && index < (counter + 10)).map((previousFact, index) => {
                return <div key={index}>
                    <button id = {previousFact.favorite ? "favorite-fact" : "normal-fact"}>{previousFact.fact}</button>
                    <button id = "status" onClick={() => update(index)}>{previousFact.favorite ? "Remove Favorite" : "Favorite"}</button>
                </div>
            })
        }
        <div id = "buttons"> 
            <button id = "previous-facts-button" onClick={nextFacts}>Last 10 facts</button>
            <button id = "next-facts-button" onClick={previousFacts}>Next 10 facts</button>
        </div>
        
    </div>
  );

  }
  export default CatFacts;