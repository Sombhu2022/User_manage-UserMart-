import React from 'react'
import { Link } from 'react-router-dom'

function IsNotAuth() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <p className="text-xl text-gray-800 mb-4">You are not authenticated. Please log in to view product details.</p>
    <Link
      to={'/login'}
      className="px-6 py-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors"
    >
      Login
    </Link>
  </div>
  )
}

export default IsNotAuth