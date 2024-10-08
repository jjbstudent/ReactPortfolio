import project1 from "../assets/images/project-1.jpg";
import project2 from "../assets/images/project-2.jpg";
import project3 from "../assets/images/project-3.jpg";
import project4 from "../assets/images/project-4.jpg";
import project5 from "../assets/images/project-5.jpg";
import Certificate from "../assets/images/badge.png";

export const HERO_CONTENT = `I'm a front-end web development bootcamp graduate with hands-on experience in HTML, CSS, JavaScript, React, Node.js, and APIs. I've built several small web projects and am eager to apply my skills in future employment opportunities, contributing to innovative and user-friendly web applications while continuously growing as a developer.`;

export const ABOUT_ME = [
  {
    about_text: `I am a dedicated and passionate bootcamp graduate with a strong foundation in front-end development. I successfully completed a 16-week intensive program with edX, where I honed my skills in various coding languages and technologies. Throughout the bootcamp, I created individual projects that challenged my creativity and technical abilities, while also collaborating with fellow students on group projects. This experience not only enhanced my coding skills but also taught me the importance of teamwork and effective communication in delivering high-quality web applications. I am eager to bring my knowledge and enthusiasm to new challenges and contribute to innovative projects.`,
    
    // Renaming for clarity
    certificate: {
      image: Certificate,  // badge image
      href: 'https://skillsbootcamp.credential.getsmarter.com/8f405795-6d93-452d-ac4b-0e9fe64f8d2c#gs.ey5qcw',    // Certificate URL
    },
  },
];


export const EXPERIENCES = [
  {
    year: "November 2023 - April 2024",
    role: "Frontend Developer (Bootcamp Projects)",
    company: "Edx Bootcamp",
    description: `Designed and developed a personal portfolio website as part of a 16-week bootcamp focused on front-end development. This project showcases the skills learned during the course, including building with React.js. The website features a homepage, project gallery, and contact section, with an emphasis on responsive design for a seamless user experience across devices.`,
    technologies: ["React.js", "CSS", "JavaScript", "GitHub", "HTML", "UI/UX design", "JQuery", ],
  },
  
];

export const PROJECTS = [
  {
    title: "Weather App",
    image: project1,
    description: `Developed a weather application using JavaScript, Bootstrap, and jQuery. The app fetches real-time weather data from a public API, allowing users to search for weather conditions by location. It features a responsive design and utilizes Bootstrap components for a clean and user-friendly interface.`,
    technologies: ["JavaScript", "Bootstrap", "jQuery", "API Integration"],
  },
  {
    title: "Events Finder API App",
    image: project2,
    description: `Collaborated in a group to develop an events finder app. The app integrates with a public events API to allow users to search for and explore events by location and date. I was responsible for creating the user interface and handling API integration for event listings.`,
    technologies: ["React.js", "JavaScript", "API Integration", "CSS"],
  },
  {
    title: "Budgeting App",
    image: project3,
    description: `Worked with a team to develop a budgeting app that helps users manage their income and expenses. I focused on building frontend components using React.js and implementing features like transaction tracking, category management, and data visualization with charts.`,
    technologies: ["React.js", "JavaScript", "CSS", "APIs"],
  },
  {
    title: "Workday Scheduler",
    image: project4,
    description: `Created a workday scheduler application using JavaScript and local storage. The app allows users to save their hourly schedule and manage tasks throughout the day, ensuring they stay organized and on track.`,
    technologies: ["JavaScript", "HTML", "CSS", "LocalStorage"],
  },
  {
    title: "Quiz Game",
    image: project5,
    description: `Developed a quiz game using JavaScript, where users can test their knowledge across various subjects. The app features a timer and scoring system, providing an interactive and engaging user experience.`,
    technologies: ["JavaScript", "HTML", "CSS", "LocalStorage"],
  },
];


export const CONTACT = {
  linkedIn: "LinkedIn",
  email: "jblearn2023@gmail.com",
};

