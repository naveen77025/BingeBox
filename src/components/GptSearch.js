import React from 'react'
import { netflixLogo } from '../Configuration/Constants'

const GptSearch = () => {
  return (
    <div className='relative w-full h-screen'>
        <div className='absolute inset-0'>
            <img className='w-full h-full object-cover' src={netflixLogo}/>
        </div>
        <div className='relative flex p-4 justify-center items-start h-full'>
            <input className='w-4/6 my-5  bg-white rounded-md py-1 px-1 text-black z-10 text-left ml-24 mr-6 h-14 mt-40' type='text' placeholder='search for Movie or TV show' />
            <button className='bg-red-600 px-2 my-5 py-1 h-14 rounded-md w-28 text-white mt-40'>Search</button>
        </div>
    </div>
  )
}

export default GptSearch