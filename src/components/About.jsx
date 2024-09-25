import aboutImg from "../assets/images/About.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className='border border-neutral-900 p-4'>
      <h1 className='my-20 text-center text-4xl'>
        About <span className="text-neutral-500">Me</span>
      </h1>
      
      {/* Container for image and text */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex items-center justify-center">
            <img className="w-100 h-80" src={aboutImg} alt='about' />
        </div>
        </div>

        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start">
          <p className="my-20 py-5">{ABOUT_TEXT}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
