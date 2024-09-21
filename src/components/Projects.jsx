import { PROJECTS } from "../constants";

const Projects = () => {
    return (
      <div className='border-b border-neutral-900 pb-4'>
          <h1 className='my-20 text-center text-4xl'>Projects</h1>
          <div>
            {PROJECTS.map((project, index) => (
              <div key={index}>
                  <img src={project.image} alt={project.title} />
              </div>
            ))}
          </div>
      </div>
    );
  };
  
  export default Projects;
  