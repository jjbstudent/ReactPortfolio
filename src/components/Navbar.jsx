import logo from "../assets/projects/jblogo.jpg";
import {FaLinkedin, FaLinkedinIn} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
      <img src={logo} alt="logo" style={{ width: "100px", height: "auto" ,marginLeft: "20px"}} />
      </div>
      <div className="m-8 flex items-center justify-center gap-4">
        <a href="https://www.linkedin.com/in/jermaine-bandoo-bb7b802a5/" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn size={40} />
        </a>
        <a href="https://github.com/jjbstudent" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
        <a href="https://x.com/jblearn2023" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter size={40} />
        </a>
        <a href="https://www.instagram.com/alphajazz81/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={40} />
        </a>
      </div>

    </nav>
  )
};

export default Navbar;
