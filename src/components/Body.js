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

  
  return (
    <div >
      <RouterProvider router={router}/>
    </div>
  );
}

export default Body