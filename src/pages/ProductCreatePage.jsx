import React from 'react'
import Sidebar from '../components/Sidebar'
import ThemeContextProvider from '../context/ThemeContextProvider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CreateProduct from './CreateProduct'

function ProductCreatePage() {
  return (
    <ThemeContextProvider>
      <div className='font-roboto'>
        <div className='hidden md:block'>
          <Sidebar />
        </div>

        <div className='grow md:ml-16 lg:ml-64 bg-gray-200 text-gray-900 dark:bg-dark-contrast dark:text-white'>
            <Navbar />
            <CreateProduct/>
            <Footer />

        </div>
      </div>
    </ThemeContextProvider>
  )
}
 export default ProductCreatePage

