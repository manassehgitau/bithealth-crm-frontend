import React from 'react'
import AdminPage from './pages/AdminPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Products from './pages/Products'
import ProductCreatePage from './pages/ProductCreatePage'
import ProductsDetailsPage from './pages/ProductsDetailsPage'
import UpdateProduct from './pages/UpdateProduct'
import EmployeeView from './pages/EmployeeView'

function App() {
  return (
    <>
    
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/adminDashboard'  element={<AdminPage />} />
        <Route path="/products" element={<Products />} />
        <Route path='/products/create'  element={<ProductCreatePage />} />
        <Route path="/products/:id" element={<ProductsDetailsPage />} />
        <Route path="/product/update/:id" element={<UpdateProduct />} />
        <Route path="/employees" element={<EmployeeView />} />


      </Routes>
    </Router>      

    </>
    
  )
}

export default App