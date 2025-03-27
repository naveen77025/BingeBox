import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Configuration/firebase';
import { signOut } from 'firebase/auth';

const Header = () => {
  const user= useSelector((store)=>store.user);
  const navigate = useNavigate();
  const handleOnSignOut =()=>{
    signOut(auth)
    .then(() => {
      navigate("/")
    })
    .catch((error) => {
      navigate("/error");
    });
  };
  return (
    <div className='absolute z-10 flex items-center w-full' >
        <img  className='w-60 px-8 py-2 bg-gradient-to-b from-black' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
        {user && (<div className="ml-auto flex items-center gap-4">
          <img className='w-16 h-16 rounded-lg' src={user?.photoURL}/>
          <button className='w-20 h-10 mr-12 rounded-md bg-red-600' onClick={handleOnSignOut}>signout</button>
        </div>)}
    </div>
  )
}

export default Header