import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Characters from "../Characters";
const Episode = () => {
  let { id } = useParams();
  let [results, setResults] = React.useState([]);
  let [fetchedData, updateFetchedData] = useState([]);
  let { name, air_date, episode} = fetchedData;
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);

      let a = await Promise.all(
        data.characters.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, 
  [api]);

  return (
    <div className="mt-4">
      <div className="d-flex flex-column gap-3">
        
        <h1 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{episode} :  {name}</h1>
        <h1 className="text-center mb-3 font-normal text-gray-700 dark:text-gray-400">Released : {air_date}</h1>
        <br/>
        <h1 className="text-center text-2xl text-blue-600 font-extrabold">Characters:</h1>
      </div>
      <Characters results={results}/>

    </div>
  );
};

export default Episode;