import React, { useEffect, useState } from 'react';

export const App = () => {
  const GIPHY_API_KEY =  "WBQ5wfYNLkXEIpBSjxf62WkMg6bu6ObV";
  const [catFact, setCatFact] = useState("");
  const [catGif, setCatGif] = useState("");
  const callGiphyAPI = (string) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${string}&api_key=${GIPHY_API_KEY}`)
    .then((res) => res.json())
    .then((data) => {

      // console.log("gif",data.data[0].images.original.url)
      setCatGif(data.data[0].images.original.url)
    });
  }
  const callAPI = () => {
    fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      setCatFact(data.fact || "Soy un gato");
      callGiphyAPI(data?.fact?.split(" ").slice(0, 3).join(" "));
      // console.log(data.fact);
    });
  };
  useEffect(callAPI, []);

  return (
    <div>
      <p>{catFact}</p>
      <img src={catGif} alt="" />
    </div> 
  );
};

export default App; 