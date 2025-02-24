import React from "react";
import styled from "styled-components";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { SiStyledcomponents } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaLink } from "react-icons/fa";
import { SiTestinglibrary } from "react-icons/si";
import { VscDebugAltSmall } from "react-icons/vsc";
import { SiGrafana } from "react-icons/si";
import { FaComments } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <Container id="skills">
      <div className="top-head">
        <hr />
        <h3>{"<Skills/>"}</h3>
      </div>
      <div className="skills-div">
        <div className="inner-div">
          <h4>Frontend</h4>
          <ul>
            <li>
              <FaHtml5 color="#E34F26" />
              <span>HTML</span>
            </li>
            <hr />
            <li>
              <FaCss3 color="#1572B6" />
              <span>CSS</span>
            </li>
            <hr />
            <li>
              <SiJavascript color="#F7DF1E" />
              <span>JavaScript</span>
            </li>
            <hr />
            <li>
              <FaReact color="#61DAFB" />
              <span>React</span>
            </li>
            <hr />
            <li>
              <TbBrandRedux color="#764ABC" />
              <span>Redux</span>
            </li>
            <hr />
            <li>
              <SiStyledcomponents color="#DB7093" />
              <span>Styled Components</span>
            </li>
            <hr />
            <li>
              <FaBootstrap color="#7952B3" />
              <span>Bootstrap</span>
            </li>
            <hr />
            <li>
              <SiMui color="#007FFF" />
              <span>Material UI</span>
            </li>
            <hr />
            <li>
              <VscDebugAltSmall color="#FFA500" />
              <span>Debugging</span>
            </li>
          </ul>
        </div>
        <div className="inner-div">
          <h4>Backend</h4>
          <ul>
            <li>
              <SiJavascript color="#F7DF1E" />
              <span>JavaScript</span>
            </li>
            <hr />
            <li>
              <FaPython color="#3776AB" />
              <span>Python</span>
            </li>
            <hr />
            <li>
              <FaNodeJs color="#339933" />
              <span>Node.js</span>
            </li>
            <hr />
            <li>
              <SiExpress color="#fff" />
              <span>Express</span>
            </li>
            <hr />
            <li>
              <SiMongodb color="#47A248" />
              <span>MongoDB</span>
            </li>
            <hr />
            <li>
              <SiMysql color="#4479A1" />
              <span>MySQL</span>
            </li>
            <hr />
            <li>
              <FaLink color="#0D6EFD" />
              <span>RESTful APIs</span>
            </li>
            <hr />
            <li>
              <SiTestinglibrary color="#E23237" />
              <span>Testing</span>
            </li>
            <hr />
            <li>
              <VscDebugAltSmall color="#FFA500" />
              <span>Debugging</span>
            </li>
            <hr />
            <li>
              <SiGrafana color="#FFA500" />
              <span>Grafana</span>
            </li>
          </ul>
        </div>
        <div className="inner-div">
          <h4>Soft Skills</h4>
          <ul>
            <li>
              <FaComments color="#0D6EFD" />
              <span>Communication</span>
            </li>
            <hr />
            <li>
              <FaLightbulb color="#FFD700" />
              <span>Problem-Solving</span>
            </li>
            <hr />
            <li>
              <FaUsers color="#28A745" />
              <span>Teamwork</span>
            </li>
            <hr />
            <li>
              <FaClock color="#DC3545" />
              <span>Time Management</span>
            </li>
            <hr />
            <li>
              <FaSyncAlt color="#17A2B8" />
              <span>Adaptability</span>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 50vh;
  background-color: black;
  box-sizing: border-box;
  padding: 2px 100px;
  .top-head {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    gap: 1rem;
    h3 {
      color: rgb(244, 244, 219);
      text-align: end;
      width: 10%;
      font-size: 23px;
    }
    hr {
      border: none;
      height: 2px;
      background-color: rgb(244, 244, 219);
      width: 90%;
    }
  }
  .skills-div {
    height: 40vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgb(243, 184, 38);
    padding: 10px 10px;
    border-radius: 10px;
    .inner-div {
      align-items: center;
      width: 100%;
      display: flex;
      gap: 1rem;
      border-radius: 10px;
      flex: 1;
      background-color: black;
      padding: 10px 10px;
      h4 {
        text-transform: uppercase;
        font-size: 20px;
        text-align: center;
        width: 10%;
        color: rgb(244, 244, 219);
      }
      ul {
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 0px 10px;
        list-style-type: none;
      }
      li {
        font-size: 16px;
        display: flex;
        align-items: center;
        gap: 10px;
        transition: 0.3s ease-in-out;
        span {
          color: rgb(244, 244, 219);
          max-width: 700px;
        }
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: 130vh;
    max-width: 800px;
    padding: 5px 5px;
    .top-head {
      /* margin-top: 40px; */
      max-width: 100%;
      hr {
        width: 70%;
      }
      h3 {
        text-align: end;
        margin-left: -10px;
      }
    }
    .skills-div {
      height: 120vh;
      display: flex;
      flex-direction: column;
      .inner-div {
        padding: 5px 0px;
        flex-direction: column;
        h4 {
          width: 100%;
        }
        ul {
          justify-content: space-evenly;
          padding: 0;
          li {
            font-weight: bold;
            svg {
              font-size: 17px;
            }
          }
        }
      }
    }
  }
`;

export default Skills;
