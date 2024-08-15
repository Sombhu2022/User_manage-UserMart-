import React from 'react'
import { spiral } from 'ldrs'

function Loader() {
    spiral.register()
  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center">
        <l-spiral size="60" speed="0.9" color="#4338ca"></l-spiral> 
          <p className="mt-4 text-gray-700">Loading...</p>
        </div>
      </div>
  )
}

export default Loader