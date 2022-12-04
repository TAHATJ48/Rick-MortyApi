import React, { useState, useEffect } from "react";

const Random = () => {
    const [random, setRandom] = useState([]);

    const getRandom = async () => {
        const rndInt = Math.floor(Math.random() * 826) + 1

        const response = await fetch(`https://rickandmortyapi.com/api/character/${rndInt}`);
        const data = await response.json();
        setRandom(data)
    }
    useEffect(() => {
        getRandom();

    }, [])

    return (
        <div className="mt-4 flex justify-center m-4">

            <div className=" m-4 border rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="content-center" src={random.image} alt="" />
                <h1 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{random.name}</h1>
                <h1 className="text-center mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{random.gender} {random.species} </h1>

            </div>

        </div>

    );
};

export default Random;