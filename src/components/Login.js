import React, { useRef, useState } from 'react';
import Header from './Header';
import { validate } from '../utils/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../Configuration/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { defaultAvatar, netflixLogo } from '../Configuration/Constants';

const Login = () => {
  const [isSigninForm,setIsSigninForm] = useState(true);
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);
  const dispatch= useDispatch();
  const [validationErrorMessage,setValidationErrorMessage]=useState(null);
  const navigate = useNavigate();
  const toggleSignInForm= () =>{
    setIsSigninForm(!isSigninForm);
  }
  const handleOnSubmit=()=>{
    const errorMessage=validate(email.current.value,password.current.value);
    setValidationErrorMessage(errorMessage);
    if(errorMessage) return;
    if(!isSigninForm){
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              console.log(user);
              updateProfile(auth.currentUser, {
                displayName: name.current.value, photoURL: defaultAvatar
              }).then(() => {
                // Profile updated!
                // ...
                const updatedUser= auth.currentUser;
                dispatch(addUser({email:updatedUser.email,displayName:updatedUser.displayName,photoURL:updatedUser.photoURL,uid:updatedUser.uid}));
                navigate("/browse");
              }).catch((error) => {
                // An error occurred
                // ...
              });
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setValidationErrorMessage(errorMessage);
              console.log(errorCode + " - " + errorMessage);
            });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setValidationErrorMessage(errorMessage);
              console.log(errorCode + " - " + errorMessage);
            });
    }
  }
  return (
    <div className=''>
        <Header/>
        <div className='absolute'>
            <img src={netflixLogo}/>
        </div>
        <form className=' absolute bg-black w-1/5 my-40 flex flex-col justify-center items-center mx-auto right-0 left-0 bg-opacity-60 rounded-xl' onSubmit={(e)=>e.preventDefault()} >
        <p className='text-3xl text-white'>Sign In</p>
          {!isSigninForm && <input className='w-5/6 my-5 border-white  bg-black rounded-md py-1 px-1 bg-opacity-40 text-white' type='text' ref={name} placeholder='Name'/>}
          <input ref={email} className='w-5/6 my-5 border-white  bg-black rounded-md py-1 px-1 bg-opacity-40 text-white' type='text' placeholder='Email or mobile number'/>
          <input ref={password} className='w-5/6 mt-6 mb-4 border-white  bg-black rounded-md py-1 px-1 bg-opacity-40 text-white' type='password' placeholder='Password' />
          <p className='w-5/6 my-1 text-red-600'>{validationErrorMessage}</p>
          <button className='bg-red-600 px-2 mx-2 my-5 py-1 rounded-md w-5/6 text-white' onClick={handleOnSubmit}>{isSigninForm?"Sign In":"Sign Up"}</button>
          <p className='text-white mb-4 mt-2 cursor-pointer' onClick={toggleSignInForm}>{isSigninForm?"New to Netflix?Sign up now.":"Alreday registered?Sign In now. "}</p>
        </form>
    </div>
  )
}

export default Login