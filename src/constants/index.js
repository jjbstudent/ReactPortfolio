import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";

export const HERO_CONTENT = `I'm a front-end web development bootcamp graduate with hands-on experience in HTML, CSS, JavaScript, React, Node.js, and APIs. I've built several small web projects and am eager to apply my skills in future employment opportunities, contributing to innovative and user-friendly web applications while continuously growing as a developer.`;
export const ABOUT_TEXT = `I am a passionate front-end developer and a graduate of the edX Bootcamp, where I honed versatile skills across various coding languages and technologies. With a strong foundation in HTML, CSS, JavaScript, and React, I have demonstrated my ability to build dynamic, responsive web applications. I thrive on solving complex problems and continually push myself to stay updated with the latest industry trends. My hands-on experience through diverse projects has equipped me with the expertise needed to create user-friendly, efficient web solutions. I'm eager to bring my skills to the next challenge and contribute to innovative teams.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Frontend Developer",
    project: "Portfolio Website",
    description: `Designed and developed a personal portfolio website to showcase projects and skills. Built with React.js, this website features multiple pages, including a homepage, project showcase, and contact form. Implemented responsive design for an optimal user experience across devices.`,
    technologies: ["React.js", "CSS", "JavaScript", "GitHub"],
  },
  {
    year: "2023",
    role: "Frontend Developer",
    project: "E-commerce Web Application",
    description: `Collaborated with a team of developers to create a mock e-commerce platform. Developed frontend components using React.js, and integrated with backend APIs to handle product listings, shopping cart functionality, and user authentication.`,
    technologies: ["React.js", "Node.js", "APIs", "MongoDB"],
  },
  {
    year: "2023",
    role: "Frontend Developer",
    project: "Weather App",
    description: `Developed a weather application that fetches real-time weather data using a public API. The app allows users to search for weather data by location and displays responsive, user-friendly weather updates.`,
    technologies: ["JavaScript", "HTML", "CSS", "React.js", "API Integration"],
  },
  {
    year: "2023",
    role: "Frontend Developer",
    project: "Task Manager",
    description: `Built a task management web app that enables users to create, manage, and delete tasks. The application stores tasks in the browser's local storage, ensuring persistence across sessions.`,
    technologies: ["React.js", "CSS", "JavaScript", "LocalStorage"],
  },
];


export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
