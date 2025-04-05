import React from 'react'

const GptSearch = () => {
  return (
    <div>
        <div className='flex'>
            <input className='mt-48 w-5/6 my-5 border-gray-700 bg-gray-500 rounded-md py-1 px-1 text-black z-10 text-left ml-24 mr-6' type='text' placeholder='search for Movie or TV show' />
            <button className='bg-red-600 mt-48 px-2 my-5 py-1 h-12 rounded-md w-28 text-white'>Search</button>
        </div>
    </div>
  )
}

export default GptSearch