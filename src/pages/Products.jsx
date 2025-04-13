import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductTable from './ProductsView'

function Products() {
  return (
      <div className='font-roboto'>
        <div className='hidden md:block'>
          <Sidebar />
        </div>

        <div className='grow md:ml-16 lg:ml-64 bg-gray-200 text-gray-900 dark:bg-dark-contrast dark:text-white'>
            <Navbar />
            <ProductTable />
            <Footer />

        </div>
        <div className='grow md:ml-16 lg:ml-64 bg-gray-200 text-gray-900 dark:bg-dark-contrast dark:text-white'>
        </div>
      </div>
  )
}

export default Products

