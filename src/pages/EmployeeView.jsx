import React from 'react'
import Sidebar from '../components/Sidebar'
import ThemeContextProvider from '../context/ThemeContextProvider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EmployeesTable from './Employees'

function EmployeeView() {
  return (
    <ThemeContextProvider>
      <div className='font-roboto'>
        <div className='hidden md:block'>
          <Sidebar />
        </div>

        <div className='grow md:ml-16 lg:ml-64 bg-gray-200 text-gray-900 dark:bg-dark-contrast dark:text-white'>
            <Navbar />
            <EmployeesTable />
            <Footer />

        </div>
        <div className='grow md:ml-16 lg:ml-64 bg-gray-200 text-gray-900 dark:bg-dark-contrast dark:text-white'>
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default EmployeeView


