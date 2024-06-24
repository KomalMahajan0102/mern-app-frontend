import React from 'react'
import { useAuth } from '../store/auth'

const Service = () => {
  const { services } = useAuth();


  return (
    <div className='services-section'>
      <div>
        <h1>Services</h1>
        <div style={{ width: "13%", height: "3px", backgroundColor: "#646cff", marginTop: "2px" }}></div>
      </div>
      <div className='services-cards'>
        {
          services?
        (
          services.map((service)=>{
            return (
              <div className='service-card'>
              <img src='/images/design.png' />
              <div className='service-card-details'>
                <div className='provider-price'>
                  <p>{service.provider}</p>
                  <p>{service.price}</p>
                </div>
                <h4>{service.service}</h4>
                <p>{service.description} </p>
    
              </div>
            </div>
          )
          })
        ):(
          <div className="spinner-container">
            <div className='spinner'></div>
          </div>
          

        )
      }

      </div>


    </div >
  )
}

export default Service
