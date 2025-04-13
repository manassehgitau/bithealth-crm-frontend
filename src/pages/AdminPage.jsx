import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import AdminDashboardHero from './AdminDashboardHero'
import Footer from '../components/Footer'


function AdminPage() {
  return (
      <div className='font-roboto'>
        <div className='hidden md:block'>
          <Sidebar />
        </div>

        <div className='grow md:ml-16 lg:ml-64 bg-gray-200 text-gray-900 dark:bg-dark-contrast dark:text-white'>
            <Navbar />
            <AdminDashboardHero />
        </div>
        <div className='grow md:ml-16 lg:ml-64 bg-gray-200 text-gray-900 dark:bg-dark-contrast dark:text-white'>
          <Footer />
        </div>
      </div>
  )
}

export default AdminPage