import React from "react";
// import DC from '../assets/180DC-MONO-STACKED.png';
import logo from '../assets/logo_nav.png';
import { navlinks } from "../data/navlinks";
import { Link } from "react-router-dom";

export default function Nav(){
return (
  <div className="navbar">
    <nav class="sticky top-0 z-30 p-4  border-gray-200 rounded bg-white dark:bg-gray-800 dark:border-gray-700">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" class="flex items-center">
          <img src={logo} class="h-14 sm:w-28" alt="Flowbite Logo" />
          {/* <div class="self-center text-lime-500 font-semibold whitespace-nowrap ">NITK</div> */}
        </a>
        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          class="hidden basis-10/12 w-full md:block md:w-auto"
          id="navbar-solid-bg"
        >
          <ul class="flex flex-col mt-4 rounded-lg bg-gray-50 justify-evenly md:flex-row md:space-x-8  md:mt-0 md:text-sm  md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {navlinks.map((navlink, idx) => (
              <li>
                <Link
                  to={navlink.link}
                  class="block py-2 pl-3 pr-4  hover:text-lime-700 rounded md:bg-transparent  md:p-0  md:dark:bg-transparent"
                  aria-current="page"
                  target={navlink._target}
                >
                  {navlink.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    <div className="h-0.5 w-full bg-lime-600"></div>
  </div>
);
}


