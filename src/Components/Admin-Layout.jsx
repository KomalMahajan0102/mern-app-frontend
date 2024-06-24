import React, { useState } from 'react'
import { NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { FaRegListAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';


const AdminLayout = () => {
  
  const {user,loading}=useAuth();
  
  return (
    <>
  
        <div className="admin-menu">
            <nav>
                <li><NavLink to='/admin/users'><FaUser />     users</NavLink></li>
                <li><NavLink to='/admin/contacts'><FaMessage />     contacts</NavLink></li>
                <li><NavLink to='/services'><FaRegListAlt />     services</NavLink></li>
                <li><NavLink to='/'><FaHome />      home</NavLink></li>
            </nav>
      
    
    <Outlet/>
    </div>
    </>
  )
}

export default AdminLayout
