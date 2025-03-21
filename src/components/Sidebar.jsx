import React from 'react'
import { FaBox, FaCog, FaTachometerAlt, FaUsers } from "react-icons/fa";
import { TbReportAnalytics, TbInvoice } from "react-icons/tb";
import { AiOutlineTransaction } from "react-icons/ai";


function Sidebar() {
  return (
    <div className='bg-gray-100 text-gray-900 px-4 h-screen fixed z-10 lg:w-64 overflow-y-scroll no-scrollbar shadow-2xl dark:bg-dark-default dark:text-white dark:border-gray-900'>
      <div className='md:flex justify-center lg:justify-start items-center mt-7 mb-2'>
        <img src="./assets/icons/bithealthNav.png" alt="BitHealth Logo" className='w-15 h-15 '/>
        <h2 className='font-bold text-2xl hidden lg:inline mt-2.5'>BitHealth</h2>
      </div>
        
        <ul className='flex flex-col mt-5 text-xl'>
            <h3 className='my-2 font-semibold hidden lg:inline'>Menu</h3>
            <div className='flex flex-col justify-center ml-2'>
              <li className='flex items-center py-3 md:py-2 lg:px-4 my-1 lg:space-x-4 hover:cursor-pointer rounded-4xl text-md font-light hover:bg-purple-default hover:text-white'>
                  <FaTachometerAlt />
                  <span className='hidden lg:inline'>Dashboard</span>
              </li>
              <li className='flex items-center py-3 lg:py-2 lg:px-4 my-1 lg:space-x-4 hover:cursor-pointer rounded-4xl text-md font-light hover:bg-purple-default hover:text-white'>
                  <TbReportAnalytics />
                  <span className='hidden lg:inline'>Reports</span>
              </li>
              <li className='flex items-center py-3 lg:py-2 lg:px-4 my-1 lg:space-x-4 hover:cursor-pointer rounded-4xl text-md font-light hover:bg-purple-default hover:text-white'>
                  <FaBox />
                  <span className='hidden lg:inline'>Products</span>
              </li>
              <li className='flex items-center py-3 lg:py-2 lg:px-4 my-1 lg:space-x-4 hover:cursor-pointer rounded-4xl text-md font-light hover:bg-purple-default hover:text-white'>
                  <FaUsers />
                  <span className='hidden lg:inline'>Consumers</span>
              </li>
            </div>
            
            <h3 className='my-2 font-semibold hidden lg:inline'>Financial</h3>
            <div className='flex flex-col justify-center ml-2'>
              <li className='flex items-center py-3 lg:py-2 lg:px-4 my-1 lg:space-x-4 hover:cursor-pointer rounded-4xl text-md font-light hover:bg-purple-default hover:text-white'>
                  <AiOutlineTransaction />
                  <span className='hidden lg:inline'>Transactions</span>
              </li>
              <li className='flex items-center py-3 lg:py-2 lg:px-4 my-1 lg:space-x-4 hover:cursor-pointer rounded-4xl text-md font-light hover:bg-purple-default hover:text-white'>
                  <TbInvoice />
                  <span className='hidden lg:inline'>Invoice</span>
              </li>
            </div>
            
            <h3 className='my-2 font-semibold hidden lg:inline'>Tools</h3>
            <div className='flex flex-col justify-center ml-2'>
            <li className='flex items-center py-3 lg:py-2 lg:px-4 my-1 lg:space-x-4 hover:cursor-pointer rounded-4xl text-md font-light hover:bg-purple-default hover:text-white'>
                <FaCog />
                <span className='hidden lg:inline'>Settings</span>
            </li>
            </div>
            
        </ul>
    </div>
  )
}

export default Sidebar