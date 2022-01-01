import "./about.scss";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { SocialIcon } from "react-social-icons";
// https://jaketrent.github.io/react-social-icons/
// https://www.npmjs.com/package/react-social-icons

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <h1>About me</h1>
        <h2>
          I'm a <span>Ujesh</span> and I'm a <span>Software Developer</span>
        </h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero porro
          qui harum quidem laborum facilis quaerat maxime veniam, illo aut,
          earum quae officiis ullam possimus corrupti ut provident laboriosam.
          Velit!
        </h3>
        <a href="#skills" target={"_blank"} rel="noopener noreferrer">
          Download CV <FileDownloadIcon className="download" />
        </a>
      </div>
      <div className="right">
        <div className="wrapper">
          <div className="imgContainer">
            <img src="assets/man.png" alt="" />
          </div>
        </div>
        <div className="socialIcon">
          <SocialIcon
            url="https://www.linkedin.com/in/ujeshnada/"
            bgColor="#DC143C"
            fgColor="#ffffff"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            url="https://twitter.com/UjeshNada"
            bgColor="#DC143C"
            fgColor="#ffffff"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            url="https://www.facebook.com/"
            bgColor="#DC143C"
            fgColor="#ffffff"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            url="https://www.instagram.com/"
            bgColor="#DC143C"
            fgColor="#ffffff"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          />
          <SocialIcon
            url="https://github.com/ujass"
            bgColor="#DC143C"
            fgColor="#ffffff"
            className="icon"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </div>
  );
}
