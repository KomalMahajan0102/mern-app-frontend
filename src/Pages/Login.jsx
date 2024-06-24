import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';


const Login = () => {
  const [user,setUser]=useState({email:"",password:""});
  
  const Navigate =useNavigate();
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
      const response=await fetch("http://localhost:5000/api/auth/login",
        {method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(user)
        }
  
      )
      const res_data=await response.json();
      console.log(response);
      if(response.ok){
        toast.success("Login Successful");       
        storeTokenInLS(res_data.token);
        setUser({email:"",password:""})
        Navigate("/");
;      }
      else{
        
       toast.error(res_data.extraDetails?res_data.extraDetails:res_data.message);
      }
      

    }
    catch(error){
      
      console.error("login",error);
    }

   

  }
  return (
    

      <div className='contact-form'>
       
          <img src="/images/login.png" alt="" className='home-image' />
        
        <form action="" onSubmit={submitHandler}>
            <div>
              <h2>Login Form</h2>
              <div style={{width:"20%",height:"3px" ,backgroundColor:"#646cff", marginTop:"2px"}}></div>
            </div>
            <div>
            <label htmlFor="email">Email</label><br />
            <input type="text" id='email' name='email' value={user.email} onChange={handleChange}/>
            </div>
            <div>
            <label htmlFor="email">Password</label><br />
            <input type="password" id='password' name='password' value={user.password} onChange={handleChange}/>
            </div>
            

          

          <div className='btn'>
            <button className='primary-btn'>Login</button>
            
          </div>
          </form>

      </div>
   
  )
}

export default Login
