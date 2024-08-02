import React, { useContext } from 'react'
import { ThemeContext } from '../App';

export default function Navbar() {
  const {darkMode, toggleTheme} = useContext(ThemeContext)
  
  return (
    <div className="flex flex-wrap items-center justify-between py-5 px-4 sm:px-[5%] md:px-[10%] sm:border-b-4 border-b-green-400">
      <h1 className="text-2xl sm:text-3xl dark:text-white text-slate-500 cursor-pointer">
        Fit <span className='text-green-400'>Fusion</span>
      </h1>

      <div className="flex flex-wrap items-center gap-4 sm:gap-[max(1vw,25px)]  sm:mt-0">
        <button
          onClick={toggleTheme}
          className="mr-0 sm:mr-[50px] md:mr-[110px] text-slate-500 bg-transparent py-2.5 px-4 sm:px-6 rounded-lg  border-2 border-green-400 text-sm sm:text-base font-medium cursor-pointer duration-200 hover:bg-green-400 hover:text-black"
        >
          {darkMode ? (
            <p>
              Light mode <i className="fa-regular fa-lightbulb"></i>
            </p>
          ) : (
            <p>
              Dark mode <i className="fa-solid fa-moon"></i>
            </p>
          )}
        </button>
      </div>
    </div>
  );
}



/* Dark Theme  <i className="fa-solid fa-moon"></i> */