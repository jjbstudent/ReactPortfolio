// Import the PROJECTS array from a constants file
import { PROJECTS } from "../constants";

const Projects = () => {
    return (
      // Outer container to center the section both vertically and horizontally
      <div className="flex min-h-screen items-center justify-center">
        
        {/* Container for the entire Projects section */}
        <div className='border-b border-neutral-900 pb-4 w-full max-w-6xl'>
          
          {/* Header for the Projects section */}
          <h1 className='my-20 text-center text-4xl'>Projects</h1>

          {/* Map over the PROJECTS array and render each project */}
          <div>
            {PROJECTS.map((project, index) => (
              // Each project is wrapped in a div with a unique key
              <div key={index} className="mb-8 flex flex-wrap justify-center">
                  
                    {/* Display the project's image */}
                    <div className='w-full lg:w-1/4 flex justify-center'>
                    <img 
                        src={project.image} 
                        width={200} // Set the desired width
                        height={200} // Set the same height for a square
                        alt={project.title}
                        className="mb-6 rounded" 
                        
                    />
                    </div>

                  {/* Add additional project details here */}
                  <div className='w-full lg:w-3/4 text-center lg:text-left'>
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    
                    {/* Map through technologies and display them as tags */}
                    <div>
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="mr-2 mb-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Projects;
