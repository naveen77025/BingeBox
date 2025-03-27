import {createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import Login from './Login'
import Browse from './Browse';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Configuration/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body= ()=> {
    //console.log("in body");
  const dispatch = useDispatch();
  const router= createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>
    }
  ]);

  useEffect(()=>{
    console.log("Auth state listener attached");
    onAuthStateChanged(auth, (user) => {
        console.log("Auth state changed:", user); // Log user changes
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const updatedUser = user;
          dispatch(addUser({email:updatedUser.email,displayName:updatedUser.displayName,photoURL:updatedUser.photoURL,uid:updatedUser.uid}));
          // ...
        } else { 
          // User is signed out
          // ...
          dispatch(removeUser());
        }
      });
      //return () => unsubscribe();
  },[])
  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  );
}

export default Body