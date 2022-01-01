import "./skills.scss";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import {
  FaPython,
  FaHtml5,
  FaReact,
  FaJava,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { DiDjango, DiCss3, DiLinux } from "react-icons/di";
import { SiJavascript, SiMysql, SiMongodb, SiCplusplus } from "react-icons/si";

// https://react-icons.github.io/react-icons

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>My Skills</h1>
      <div className="container">
        <div className="left">
          <h2>My creative skills & experiences.</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            magnam earum perferendis non laudantium, exercitationem excepturi
            optio odit eaque dicta, quae ipsum rerum fuga nostrum repudiandae
            laborum alias delectus deserunt!
          </h3>
          <a href="#project">
            Read more <KeyboardDoubleArrowLeftIcon className="read" />
          </a>
        </div>
        <div className="right">
          <FaPython className="icon"/>
          <DiDjango className="icon"/>
          <FaJava className="icon"/>
          <SiCplusplus className="icon"/>
          <SiMysql className="icon"/>
          <SiMongodb className="icon"/>
          <FaReact className="icon"/>
          <SiJavascript className="icon"/>
          <FaNodeJs className="icon"/>
          <FaHtml5 className="icon"/>
          <DiCss3 className="icon"/>
          <DiLinux className="icon"/>
          <FaBootstrap className="icon"/>
        </div>
      </div>
    </div>
  );
}
