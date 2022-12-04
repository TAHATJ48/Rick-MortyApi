import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    
<nav class="dark:bg-gray-800 rounded ">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <Link className="link" to="/">
    <img src="https://img.icons8.com/color/96/null/rick-sanchez.png"/>
    </Link>
      <div class="" id="navbar-default">
      <ul class="flex flex-row  ">
        <li>
        <Link className="m-16" to="/characters">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        R&M Stats
        </button>
        </Link>
        </li>
        <li>
        <Link className="m-16 bg-" to="/random">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Random  
        </button>
        </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}









export default Header
