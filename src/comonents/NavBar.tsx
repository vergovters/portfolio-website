import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'
import { HOME_ROUTE, JOBS_ROUTE } from '../utils/consts';
import { useLocation, useNavigate } from 'react-router-dom';
import LanguageToggle from './LanguageToggle';
import Typewriter from 'typewriter-effect';

const NavBar = () => {

    const location = useLocation()
    const isHomePage = location.pathname === HOME_ROUTE;

    const navigate = useNavigate()

    return (
      <nav className="fixed top-0 left-0 w-full bg-white border-gray-200 dark:bg-gray-900 space z-[10]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white"><Typewriter
              options={{
                strings: ['Fialkivskyi.dev'],
                autoStart: true,
                loop: true,
              }}
            /></span>
        </a>
        <div>
        
          {isHomePage ? (
            <div className='flex flex-row items-center justify-center'>
              <div className="items-center hidden md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul className="flex flex-col font-medium p-4 mr-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 cursor-pointer">
                  <li>
                    <ScrollLink to="home" spy={true} smooth={true} offset={-180} duration={500} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Home</ScrollLink>
                  </li>
                  <li>
                    <ScrollLink to="about" spy={true} smooth={true} offset={-200} duration={500} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</ScrollLink>
                  </li>
                  <li>
                  <ScrollLink to="projects" spy={true} smooth={true} offset={-50} duration={500} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</ScrollLink>
                  </li>
                  <li>
                  <ScrollLink to="contact" spy={true} smooth={true} offset={0} duration={700} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</ScrollLink>
                  </li>
                </ul>
              </div>
              <div className="flex md:order-2">
                <RouterLink to={JOBS_ROUTE} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Jobs</RouterLink>
                <LanguageToggle/>
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => navigate(-1)}>Back</button>
              <LanguageToggle/>
            </div>
          )}
        </div>
      </div>
    </nav>
    );
};

export default NavBar;