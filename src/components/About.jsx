import badge from "../assets/images/badge.png";
import { ABOUT_ME } from "../constants";


const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-2 text-center text-4xl'>
        About <span className="text-neutral-500">Me</span>
      </h1>
      
      {/* Container for image and text */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:p-4">
          <div className="flex items-center justify-center">
            {/* Clickable badge linking to the certificate page */}
            <a 
              href={ABOUT_ME[0].certificate.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group" // Group class for hover effect
            >
              <img 
                className="w-200 h-200 rounded-lg transition-transform duration-300 transform group-hover:scale-105" // Scaling on hover
                src={ABOUT_ME[0].certificate.image} 
                alt='Certification Badge' 
              />
              
            </a>
            
            
          </div>
        </div>
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col justify-center lg:justify-start">
            <p className="py-5 ml-10 mr-10">{ABOUT_ME[0].about_text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
