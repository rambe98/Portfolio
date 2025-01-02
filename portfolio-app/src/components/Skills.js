import React from "react";
import "../css/Skill.css";
import javaIcon from "../image/Java-Light.svg";
import cIcon from "../image/C.svg";
import cSharpIcon from "../image/CS.svg";
import cppIcon from "../image/CPP.svg";
import pythonIcon from "../image/Python-Light.svg";
import htmlIcon from "../image/HTML.svg";
import cssIcon from "../image/CSS.svg";
import jsIcon from "../image/JavaScript.svg";
import gradleIcon from "../image/Gradle-Light.svg";
import mysqlIcon from "../image/MySQL-Light.svg";
import nodejsIcon from "../image/NodeJS-Light.svg";
import reactIcon from "../image/React-Light.svg";
import springIcon from "../image/Spring-Light.svg";
import unityIcon from "../image/Unity-Light.svg";
import unrealIcon from "../image/UnrealEngine.svg";
import androidStudioIcon from "../image/AndroidStudio-Light.svg";
import atomIcon from "../image/Atom.svg";
import eclipseIcon from "../image/Eclipse-Light.svg";
import awsIcon from "../image/AWS-Light.svg";
import firebaseIcon from "../image/Firebase-Light.svg";
import gitIcon from "../image/Git.svg";
import githubIcon from "../image/Github-Light.svg";
import illustratorIcon from "../image/Illustrator.svg";
import photoshopIcon from "../image/Photoshop.svg";
import postmanIcon from "../image/Postman.svg";
import vscodeIcon from "../image/VSCode.svg";

function Skills() {
  return (
    <section id="skills">
      <h2>SKILLS</h2>
      <div className="skills-container">
        <div className="tech">
          <h3>프로그래밍 언어</h3>
          <p className="tech-icons">
            <span className="tooltip" data-tooltip="Java">
              <img src={javaIcon} alt="java" />
            </span>
            <span className="tooltip" data-tooltip="C">
              <img src={cIcon} alt="C" />
            </span>
            <span className="tooltip" data-tooltip="C#">
              <img src={cSharpIcon} alt="C#" />
            </span>
            <span className="tooltip" data-tooltip="C++">
              <img src={cppIcon} alt="C++" />
            </span>
            <span className="tooltip" data-tooltip="Python">
              <img src={pythonIcon} alt="Python" />
            </span>
            <span className="tooltip" data-tooltip="HTML">
              <img src={htmlIcon} alt="HTML" />
            </span>
            <span className="tooltip" data-tooltip="CSS">
              <img src={cssIcon} alt="CSS" />
            </span>
            <span className="tooltip" data-tooltip="JavaScript">
              <img src={jsIcon} alt="JavaScript" />
            </span>
          </p>
        </div>
        <div className="tech">
          <h3>프레임워크/라이브러리</h3>
          <p className="tech-icons">
            <span className="tooltip" data-tooltip="Gradle">
              <img src={gradleIcon} alt="Gradle" />
            </span>
            <span className="tooltip" data-tooltip="MySQL">
              <img src={mysqlIcon} alt="MySQL" />
            </span>
            <span className="tooltip" data-tooltip="Node.js">
              <img src={nodejsIcon} alt="Node.js" />
            </span>
            <span className="tooltip" data-tooltip="React">
              <img src={reactIcon} alt="React" />
            </span>
            <span className="tooltip" data-tooltip="Spring">
              <img src={springIcon} alt="Spring" />
            </span>
          </p>
        </div>
      </div>
      <div className="tech">
        <h3>도구 및 플랫폼</h3>
        <p className="tech-icons">
          <span className="tooltip" data-tooltip="Unity">
            <img src={unityIcon} alt="Unity" />
          </span>
          <span className="tooltip" data-tooltip="Unreal Engine">
            <img src={unrealIcon} alt="Unreal Engine" />
          </span>
          <span className="tooltip" data-tooltip="Android Studio">
            <img src={androidStudioIcon} alt="Android Studio" />
          </span>
          <span className="tooltip" data-tooltip="Atom">
            <img src={atomIcon} alt="Atom" />
          </span>
          <span className="tooltip" data-tooltip="Eclipse">
            <img src={eclipseIcon} alt="Eclipse" />
          </span>
          <span className="tooltip" data-tooltip="AWS">
            <img src={awsIcon} alt="AWS" />
          </span>
          <span className="tooltip" data-tooltip="Firebase">
            <img src={firebaseIcon} alt="Firebase" />
          </span>
          <span className="tooltip" data-tooltip="Git">
            <img src={gitIcon} alt="Git" />
          </span>
          <span className="tooltip" data-tooltip="GitHub">
            <img src={githubIcon} alt="GitHub" />
          </span>
          <span className="tooltip" data-tooltip="Illustrator">
            <img src={illustratorIcon} alt="Illustrator" />
          </span>
          <span className="tooltip" data-tooltip="Photoshop">
            <img src={photoshopIcon} alt="Photoshop" />
          </span>
          <span className="tooltip" data-tooltip="Postman">
            <img src={postmanIcon} alt="Postman" />
          </span>
          <span className="tooltip" data-tooltip="VSCode">
            <img src={vscodeIcon} alt="VSCode" />
          </span>
        </p>
      </div>
    </section>
  );
}

export default Skills;
