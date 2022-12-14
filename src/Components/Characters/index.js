import React from "react";

const Characters = ({ results }) => {
    return (

        <div className="grid grid-cols-4 m-4 content-center">
            {
                results.map((character) => {
                    return (
                        <div className="card_item" key={character.id}>
                            <a href="#" class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={character.image} alt=""/>
                                    <div class="flex flex-col justify-between p-4 leading-normal">
                                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{character.name}</h5>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{character.gender}</p>
                                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{character.species}</p>
                                    </div>
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default Characters;