import { NavLink } from "react-router-dom";
import  Analytics  from "../Components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const {user}=useAuth();
  return (
    <>
      
          <div className="home">
            <div className="home-section">
              <p>Welcome, {user?user.username:'to our Website'}</p>
              

              <h1>Why Choose Us? </h1>
              <p>
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p>
                Customization: We understand that every business is unique.
                Thats why we create solutions that are tailored to your specific
                needs and goals.
              </p>
              <p>
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p>
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p>
                Reliability: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable and
                available 24/7.
              </p>
              <div className='btn'>
          <button className='primary-btn'>Connect Now</button>
          <button className='secondary-btn'>Learn more</button>
        </div>
            </div>
            <div >
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
                className="home-image"
              />
            </div>
          </div>
        

      <Analytics />
    </>
  );
};
export default About;