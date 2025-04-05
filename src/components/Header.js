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
          <button onClick={handleGptSearch} className='w-48 h-10 ml-28 rounded-md bg-green-800 font-serif'>{!gptSearchEnabled?'GPT Search':'back To Home'}</button>
          <img className='w-12 h-10 rounded-md' src={user?.photoURL}/>
          <button className='w-16 h-10 rounded-md bg-red-600' onClick={handleOnSignOut}>signout</button>
        </div>)}
    </div>
  )
}

export default Header