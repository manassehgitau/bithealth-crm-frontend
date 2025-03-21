import React from 'react'
import AdminPage from './pages/AdminPage'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
    <Analytics />
      <AdminPage />
      
      
    </>
    
  )
}

export default App