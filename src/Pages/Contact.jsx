import React, { useState } from 'react'
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const Contact = () => {
  const [contact,setContact]=useState({username:"",email:"",message:""});
  const [userdata,setUserdata]=useState(true);
  const {user}=useAuth();
  
 

  
  if(userdata&&user){
    setContact({
      username:user.username,
      email:user.email,
      message:""
    })
    setUserdata(false);
  }
 
  function handleChange(event){   
    setContact((prev)=>({...prev,
      [event.target.name]:event.target.value

    }))
  }
  async function submitHandler(event){
    event.preventDefault();
    try{
    const response=await fetch('http://localhost:5000/api/form/contact',{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify(contact)
    })
    const data=await response.json();
    

    if(response.ok){
      toast.success("Message send successsfully")
      setContact({username:"",email:"",message:""});

    }
    else{
      toast.error(data.extraDetails?data.extraDetails:data.message);
    }

    }
    catch(error){
      console.error(error);
    }
  }
  return (
    

      <div className='contact-form'>
       
          <img src="/images/support.png" alt="" className='home-image' />
        
        <form action="" onSubmit={submitHandler}>
          
            <div>
            <label htmlFor="username">Username</label><br />
            <input type="text" id='username' name='username' value={contact.username} onChange={handleChange}/>
            </div>
            <div>
            <label htmlFor="email">Email</label><br />
            <input type="text" id='email' name='email' value={contact.email} onChange={handleChange}/>
            </div>
            <div>
            <label htmlFor="message">Message</label><br />
            <textarea type="text" id='message' name='message' rows={4} value={contact.message} onChange={handleChange}/>
            </div>

          

          <div className='btn'>
            <button className='primary-btn'>Submit</button>
            
          </div>
          </form>

      </div>
   
  )
}

export default Contact
