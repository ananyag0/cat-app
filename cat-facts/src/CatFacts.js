import React from "react";
import { useState, useEffect } from "react";

function CatFacts() {
    const [facts, setFacts] = useState([]);
    const [prev, setPrevious] = useState([]);
    const [fav, setFavorite] = useState(false);
    const [count, setCount] = useState(0);
    const fetchData = async () => {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        if (facts != null && facts.fact != null) {
            prev.unshift({favorite: fav, fact: facts.fact});
            setFavorite(false);
        }
        setPrevious(prev);
        setFacts(data);
    };

    const update = (index) => {
        const copyArr = [...prev];
        const element = copyArr[index];
        element.favorite = !element.favorite;
        copyArr[index] = element;
        setPrevious(copyArr);
    }

    const nextFacts = () => {
        setCount(Math.min(count+10, prev.length - prev.length % 10));
    }
    const previousFacts = () => {
        setCount(Math.max(0, count-10));
    }
    const favorite = () => {
        setFavorite(true);
    }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    
    <div className = 'container'>
      <button id = "fact"> {facts.fact} </button>
      <button className = "button" onClick = {fetchData}> Give me a fact! </button>
      <p button = "facts-box">Here are your previously generated facts: </p>
        {
            prev.filter((_, index) => index >= count && index < (count + 10)).map((previousFact, index) => {
                return <div key={index}>
                    <button id = {previousFact.favorite ? "favorite-fact" : "normal-fact"}>{previousFact.fact}</button>
                    <button id = "status" onClick={() => update(index)}>{previousFact.favorite ? "⭐" : "☆"}</button>
                </div>
            })
        }
        <div id = "buttons"> 
            <button id = "previous-facts-button" onClick={nextFacts}>◄</button>
            <button id = "next-facts-button" onClick={previousFacts}>►</button>
        </div>
        
    </div>
  );

  }
  export default CatFacts;