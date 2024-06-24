import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const AdminUsers = () => {
  const {authorizationToken,user}=useAuth();
  const [users,setUsers]=useState([]);
  const {loading,setLoading}=useAuth();
  const Navigate=useNavigate();

  
  const getAllUsers=async()=>{
    try{

      const response=await fetch("http://localhost:5000/api/admin/users",{
        method:"GET",
        headers:{
          Authorization:authorizationToken
        }
      })
      const data=await response.json();
      setUsers(data.users);
      

    }
    catch(error){
      console.log("cliet side error in fetchinig user data",error)
    }

  }
  const deleteuser=async(id)=>{
    console.log(id);
    try{
      const response=await fetch(`http://localhost:5000/api/admin/users/delete/${id}`,{
        method:"DELETE",
        headers:{
          Authorization:authorizationToken
        }
      })
     
      const data=await response.json();
      if(response.ok){
        toast.success("User deleted");
        getAllUsers();

      }
      


    }
    catch(error){
      console.log("cliet side error in deleting user data",error)
    }

  }
  useEffect(()=>{
    getAllUsers()
  },[]);

  return (
    <div>
      <h1>Admin Users Data</h1>
      <div>
        <table>
          <thead>
          <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Update</th>
          <th>Delete</th>
          </tr>
          </thead>
         <tbody>

         
          {!loading>0?(users.map((user,index)=>{return(
           <tr key={index}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td><Link to={`/admin/users/${user._id}/edit`}><button className='update-btn' >Edit</button></Link></td>
            <td><button className='delete-btn' onClick={()=>deleteuser(user._id)}>Delete</button></td>
          </tr>

          )})):
          (<div className="spinner-container">
            <div className='spinner'></div>
          </div>)
          }
         </tbody>
          
        
        </table>

      </div>
       
      
    </div>
  )
}

export default AdminUsers
