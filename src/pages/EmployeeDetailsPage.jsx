import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EmployeeDetails from './EmployeeDetails'

function EmployeeDetailsPage() {
  return (
    <div className='font-roboto'>
        <div className='hidden md:block'>
          <Sidebar />
        </div>

        <div className='grow md:ml-16 lg:ml-64 bg-gray-200 text-gray-900 dark:bg-dark-contrast dark:text-white'>
            <Navbar />
            <EmployeeDetails />
        </div>
        <div className='grow md:ml-16 lg:ml-64 bg-gray-200 text-gray-900 dark:bg-dark-contrast dark:text-white'>
          <Footer />
        </div>
      </div>
  )
}

export default EmployeeDetailsPage