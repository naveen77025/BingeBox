import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Configuration/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { removeNowPlaying, removeTrending } from '../utils/movieSlice';
import { toggleSearchEnabled } from '../utils/gptSearchSlice';

const Header = () => {
  const user= useSelector((store)=>store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gptSearch= useSelector(store=>store.gptSearch);
  const gptSearchEnabled=gptSearch.searchEnabled;
  const handleOnSignOut =()=>{
    signOut(auth)
    .then(() => {
    })
    .catch((error) => {
      navigate("/error");
    });
  };
  const handleGptSearch=()=>{
    dispatch(toggleSearchEnabled());
  }
  useEffect(()=>{
    //console.log("Auth state listener attached");
    const unsubscribe=onAuthStateChanged(auth, (user) => {
        //console.log("Auth state changed:", user); // Log user changes
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const updatedUser = user;
          dispatch(addUser({email:updatedUser.email,displayName:updatedUser.displayName,photoURL:updatedUser.photoURL,uid:updatedUser.uid}));
          navigate("/browse");
          // ...
        } else { 
          // User is signed out
          // ...
          dispatch(removeUser());
          //dispatch(removeNowPlaying());
          //dispatch(removeTrending());
          navigate("/")
        }
      });
      return () => unsubscribe();
  },[])
  return (
    <div className='absolute z-10 flex items-center w-full bg-gradient-to-b from-black' >
        <img  className='w-60 px-8' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
        {user && (<div className="ml-auto flex items-center gap-3">
          <button
          onClick={handleGptSearch}
          className="px-6 py-2 ml-4 md:mx-4 bg-red-600 text-white font-sans font-medium text-lg rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:outline-none transition-all duration-300 shadow-md">
          {!gptSearchEnabled ? 'GPT Search' : 'Back To Home'}
          </button>
          <img
            className="w-10 h-10 rounded-full border-2 border-gray-700 object-cover hover:border-red-500 transition-all duration-300 shadow-md"
            src={user?.photoURL}
            alt="User Profile"
          />
          <button
            onClick={handleOnSignOut}
            className="px-4 py-2 bg-red-600 text-white font-sans font-medium text-sm rounded-md hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:outline-none transition-all duration-300 shadow-md"
          >
            Sign Out
          </button>
        </div>)}
    </div>
  )
}

export default Header