import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="container mx-auto">
        <hr/>
        <div className="flex justify-between">
          <p>
            © {new Date().getFullYear()} Yaser's Portfolio
          </p>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com/yanv1991"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
                <BsTwitterX />
            </a>
            <a
              href="https://github.com/yanv1991"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yaser-nicaragua-341a3286/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    )
  }
  
  export default Footer;