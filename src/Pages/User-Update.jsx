import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const UserUpdate = () => {
  const Navigate =useNavigate();
  const { authorizationToken } = useAuth();
  const [userdata,setUserdata]=useState("");
  const [upadatedUser,setupadatedUser]=useState({username:"",email:"",phone:""});
  const [user,setUser]=useState(true);
  let { id } = useParams();
 
 
  const getData = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/${id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken
        }
      })
      if(response.ok){
        const data = await response.json();
        setUserdata(data.data);
        

      }
      


    }
    catch (error) {
      console.log("cliet side error in fetchinig user data", error)
    }

  }
  useEffect(()=>{
    getData(id)
  },[]);
  if(user&&userdata){
    setupadatedUser({
      username:userdata.username,
      email:userdata.email,
      phone:userdata.phone
    })
    setUser(false);
  }
  const handleChange=(event)=>{
    setupadatedUser((prev)=>{
      return(
        {
          ...prev,
          [event.target.name]:event.target.value
        }
      )
    })
  }
  const handleSubmit=async(event)=>{
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/update/${id}`, {
        method: "PATCH",
        headers: {
          Authorization: authorizationToken,
          'Content-Type':"application/json"

        },
        body:JSON.stringify(upadatedUser),
      })
      if(response.ok){
        const data = await response.json();  
        toast.success(data.message);
        Navigate('/admin/users');


      }
      


    }
    catch (error) {
      console.log("cliet side error in deleting user data", error)
    }
  }


  return (
    <div className='update-form'>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name='username'  value={upadatedUser.username} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name='email' value={upadatedUser.email } onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="phone">Mobile</label>
          <input type="number" id="phone" name='phone' value={upadatedUser.phone} onChange={handleChange}/>
        </div>
        <button className='submit-btn'>Submit</button>

      </form>
    </div>
  )
}

export default UserUpdate
