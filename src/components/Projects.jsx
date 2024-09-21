// Import the PROJECTS array from a constants file
import { PROJECTS } from "../constants";

const Projects = () => {
    return (
      // Container for the entire Projects section
      <div className='border-b border-neutral-900 pb-4'>
        
          {/* Header for the Projects section */}
          <h1 className='my-20 text-center text-4xl'>Projects</h1>

          {/* Map over the PROJECTS array and render each project */}
          <div>
            {PROJECTS.map((project, index) => (
              // Each project is wrapped in a div with a unique key
              <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                  
                  {/* Display the project's image */}
                  <div classname= 'w-full lg:w-1/4 '></div>
                  <img src={project.image} 
                  width={250} 
                  height={250} 
                  alt={project.title}
                  className="mb-6 rounded" 
                  />
              </div>
            ))}
          </div>
          <div className="w-full max-w-xl lg:w-3/4"></div>
          <h6></h6>
        
      </div>
    );
  };
  
  export default Projects;
