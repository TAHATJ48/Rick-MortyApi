import React, { useEffect, useState } from 'react';
const Status = () => {

    const [Alive, setAlive] = useState([]);
    const [Dead, setDead] = useState([]);
    const [Unknown, setUnknown] = useState([]);
    const [Rick, setRick] = useState([]);
    const [Morty, setMorty] = useState([]);
    const [Pickle, setPickle] = useState([]);

    const getAlive = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character?status=alive");
        const data = await response.json();
        const data2 = data.info.count
        setAlive(data2)
    }
    const getDead = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character?status=dead");
        const data = await response.json();
        const data2 = data.info.count
        setDead(data2)
    }
    const getUnknown = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character?status=unknown");
        const data = await response.json();
        const data2 = data.info.count
        setUnknown(data2)
    }
    const getRick = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character?name=rick");
        const data = await response.json();
        const data2 = data.info.count
        setRick(data2)
    }
    const getMorty = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character?name=morty");
        const data = await response.json();
        const data2 = data.info.count
        setMorty(data2)
    }
    const getPickle = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character?name=morty");
        const data = await response.json();
        const data2 = data.info.count
        setPickle(data2)
    }
    useEffect(() => {
        getAlive();
        getDead();
        getUnknown();
        getRick();
        getMorty();
        getPickle();

    }, [])
    return (

        
<div class="flex justify-center mt-4">
    <table class="w-8/12 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                     
                </th>
                <th scope="col" class="py-3 px-6">
                    Number
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Alive Characters
                </th>
                <td class="py-4 px-6">
                {Alive}
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Dead Characters
                </th>
                <td class="py-4 px-6">
                {Dead}
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Unknown Status Characters
                </th>
                <td class="py-4 px-6">
                {Unknown}
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Characters Derived FROM Rick
                </th>
                <td class="py-4 px-6">
                {Rick}
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Characters Derived From Morty
                </th>
                <td class="py-4 px-6">
                {Morty}
                </td>
            </tr>
        </tbody>
    </table>
</div>

    )
}

export default Status;