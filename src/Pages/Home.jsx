import React from 'react'
import Analytics from '../Components/Analytics'

const Home = () => {
  return (
    <>
   
    <div className='home'>
      <div className='home-section'>
        <div><p>We are the World Best IT Company</p>
        <h1>Welcome to Thapa Technical</h1></div>
        
        <p>
          Are you ready to take your business to the next level with
          cutting-edge IT solutions? Look no further! At Thapa Technical,
          we specialize in providing innovative IT services and solutions
          tailored to meet your unique needs.
        </p>

        <div className='btn'>
          <button className='primary-btn'>Connect Now</button>
          <button className='secondary-btn'>Learn more</button>
        </div>
      </div>
      <div>
        <img src="/images/home.png" alt=""  className='home-image' />
      </div>
    </div>
    <Analytics></Analytics>
    <div className='home'>
    <div>
        <img src="/images/design.png" alt=""  className='home-image' />
      </div>
      <div className='home-section'>
        <div>
        <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              let's discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
        </div>

        <div className='btn'>
          <button className='primary-btn'>Connect Now</button>
          <button className='secondary-btn'>Learn more</button>
        </div>
      </div>
      
    </div>
    </>
  )
}

export default Home
