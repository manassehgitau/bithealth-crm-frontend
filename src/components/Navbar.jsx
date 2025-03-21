import React, { useContext } from 'react'
import { FaMoon, FaSun, FaSearch } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContextProvider'
import NavbarProfile from './NavbarProfile';

function Navbar() {
    const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div className='fixed w-screen top-0 left-0 z-5'>
        <div className='text-grey-900 p-4 flex items-center justify-between bg-gray-100 dark:bg-dark-default dark:text-white'>
            <div className='space-y-1 flex flex-col'>
                <div className='flex items-center justify-start md:hidden'>
                    <img src="./assets/icons/bithealthNav.png" alt="BitHealth Logo" className='w-15 h-15 '/>
                    <h2 className='text-sm md:text-2xl font-bold'>BitHealth</h2>
                </div>
                <h1 className='hidden md:inline text-sm md:text-2xl font-bold md:pl-20 lg:pl-68'>Sales Report</h1>
                
                <p className='hidden md:inline text-gray-600 dark:text-gray-300 text-sm md:text-md md:pl-20 lg:pl-68'>{new Date().toDateString()}</p>
            </div>
            <div className='flex justify-between gap-4 md:gap-7'>
                <div className='hidden md:flex items-center justify-center text-lg text-white bg-purple-default dark:bg-white dark:text-dark-default px-3 lg:px-4 rounded-full cursor-pointer'>
                    <FaSearch />
                </div>
                <button className='hidden md:inline text-lg dark:bg-white text-white bg-purple-default dark:text-dark-default px-3 lg:px-4 rounded-full cursor-pointer' onClick={toggleTheme}>
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                </button>
                <NavbarProfile />
            </div> 
        </div>
    </div>
    
  )
}

export default Navbar