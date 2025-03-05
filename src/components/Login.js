import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div className=''>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg'/>
        </div>
        <form className=' absolute bg-black w-1/5 my-40 flex flex-col justify-center items-center mx-auto right-0 left-0 bg-opacity-60 rounded-xl'>
        <p className='text-3xl text-white'>Sign In</p>
          <input className='w-5/6 my-5 border-white  bg-black rounded-md py-1 px-1 bg-opacity-40 text-white' type='text' placeholder='Email or mobile number'/>
          <input className='w-5/6 my-5 border-white  bg-black rounded-md py-1 px-1 bg-opacity-40 text-white' type='password' placeholder='Password' />
          <button className='bg-red-600 px-2 mx-2 my-5 py-1 rounded-md w-5/6 text-white'>Sign In</button>
          <p className='text-white py-2'>New to Netflix?Sign up now.</p>
        </form>
    </div>
  )
}

export default Login