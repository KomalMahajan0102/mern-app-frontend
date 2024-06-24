import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';
const Register = () => {
  const [user,setUser]=useState({username:"",email:"",phone:"",password:""});
  const navigate=useNavigate();
  const {storeTokenInLS}=useAuth();

  function handleChange(event){   
    setUser((prev)=>({...prev,
      [event.target.name]:event.target.value

    }))
  }
  async function submitHandler(event){
    event.preventDefault();

    console.log(user);
    try{
      const response=await fetch("http://localhost:5000/api/auth/register",{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(user),

      })
      const res_data=await response.json();
      console.log("res from server",res_data);
      if(response.ok){
        toast.success("Registered Successful");
        storeTokenInLS(res_data.token);
        setUser({username:"",email:"",phone:"",password:""});
        navigate("/login");
      }
      else{
        toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);

      }
      
    }
    catch(error){
      console.error("register",error);
    }
  }
  return (
    

      <div className='contact-form'>
       
          <img src="/images/register.png" alt="" className='home-image' />
        
        <form action="" onSubmit={submitHandler}>
            <div>
              <h2>Registration Form</h2>
              <div style={{width:"20%",height:"3px" ,backgroundColor:"#646cff", marginTop:"2px"}}></div>
            </div>
            <div>
            <label htmlFor="username">Username</label><br />
            <input type="text" id='username' name='username' value={user.username} onChange={handleChange}/>
            </div>
            <div>
            <label htmlFor="email">Email</label><br />
            <input type="text" id='email' name='email' value={user.email} onChange={handleChange}/>
            </div>
            <div>
            <label htmlFor="phone">Phone</label><br />
            <input type="number" id='phone' name='phone' value={user.phone} onChange={handleChange}/>
            </div>
            <div>
            <label htmlFor="email">Password</label><br />
            <input type="password" id='password' name='password' value={user.password} onChange={handleChange}/>
            </div>
            

          

          <div className='btn'>
            <button className='primary-btn'>Register Now</button>
            
          </div>
          </form>

      </div>
   
  )
}

export default Register
