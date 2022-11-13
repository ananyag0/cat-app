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

// function CatFacts() {
//   const [facts, setFacts] = useState([]);
//   const fetchData = async () => {
//     const response = await fetch("https://catfact.ninja/fact");
//     const data = await response.json();
//     setFacts(data);
//     const printOut = data.fact;
//     // console.log(facts);
//     var array = {...facts, data.facts};
//    console.log(data);

//   };

//   useEffect(() => {
//     fetchData();
//   }, []);
//   return (
    
//     <div className = 'container'>
//       <p id = "fact"> {facts.fact} </p>
//       <button className = "button" onClick = {fetchData}> Give me a fact </button>
//     </div>
//   );
// }


// export default CatFacts;
