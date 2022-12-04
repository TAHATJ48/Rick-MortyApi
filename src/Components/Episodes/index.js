import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { StoreContext } from '../Store/Store';
const Episodes = () => {
    const { favArray, setFavArray } = useContext(StoreContext)

    const [episodes, setEpisodes] = useState([]);
    const [api, setApi] = useState("https://rickandmortyapi.com/api/episode?page=1");


    const getEpisodes = async () => {
        const response = await fetch(api);
        const data = await response.json();
        const data2 = data.results
        setEpisodes(data2)
    }

    const getNext = async () => {
        const response = await fetch(api);
        const data = await response.json();
        const data2 = data.info
        if (data2 !== null)
            setApi(data2.next)
        getEpisodes()
    }

    useEffect(() => {
        getEpisodes()
        getNext()

    }, [])

    return (

        <div>
            <div className="grid grid-cols-4 m-4">
                {
                    episodes.map((episode) => {
                        return (
                            <div class="mb-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{episode.name}</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{episode.episode} | {episode.air_date}</p>
                                <Link to={`/episode/${episode.id}`}>

                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Characters
                                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                </Link>
                            </div>
                        )
                    })
                }

            </div>
            <button onClick={getNext} type="button" class="m-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Next page
                <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
    )
}

export default Episodes;