import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
const Logout = () => {
    const {LogoutUser,user}=useAuth();


    useEffect(()=>{
        LogoutUser();
    },[LogoutUser]);
    const Navigate=useNavigate();
    
  return (
 Navigate("/login")
   
  )
}

export default Logout
