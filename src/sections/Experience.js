import React from "react";
import styled from "styled-components";
import skill1 from "../images/skill1.png";
import image from "../images/laptop-2589420_640.jpg";
import man from "../images/man-8915435_640.png";
import {
  FaBuilding,
  FaIdBadge,
  FaCalendarAlt,
  FaHandPointRight,
} from "react-icons/fa";

const Experience = () => {
  return (
    <Container id="experience">
      <div className="top-head">
        <h3>{"<Experience/>"}</h3>
        <hr />
      </div>
      <div className="experience-div">
        <div className="image-div">
          <img src={man} alt="skill1" />
        </div>
        <div className="content-div">
          <div className="header">
            <div>
              <FaIdBadge color="#007bff" />
              <h3 style={{ color: "rgb(244, 244, 219)" }}>
                Junior Software Engineer
              </h3>
            </div>
            <hr />
            <div>
              <FaBuilding color="#28a745" />
              <h3 style={{ color: "rgb(244, 244, 219)" }}>
                Nuron Networks India Pvt. Ltd
              </h3>
            </div>
            <hr />
            <div>
              <FaCalendarAlt color="#ff9800" />
              <p>Feb 2023 - Present</p>
            </div>
          </div>
          <div className="exp-points">
            <div>
              <FaHandPointRight />
              <p>
                Interacted with the solutions team to discuss workflows and
                requirements, and implemented them following proper approvals,
                ensuring technical solutions aligned with business goals.
              </p>
            </div>
            <div>
              <FaHandPointRight />
              <p>
                Developed and implemented database schema models for web
                applications, ensuring efficient data management and storage.
              </p>
            </div>
            <div>
              <FaHandPointRight />
              <p>
                Collaborated with graphic designers to create interactive and
                engaging user interfaces, enhancing user satisfaction.
              </p>
            </div>
            <div>
              <FaHandPointRight />
              <p>
                Performed development, testing, and debugging of software
                applications to ensure high performance and reliability.
              </p>
            </div>
            <div>
              <FaHandPointRight />
              <p>
                Involved in comprehensive code reviews to maintain code quality
                and adherence to best practices.
              </p>
            </div>
            <div>
              <FaHandPointRight />
              <p>
                Participated in Agile ceremonies including daily stand-ups,
                sprint planning, and project phase meetings to ensure project
                alignment and progress.
              </p>
            </div>
            <div>
              <FaHandPointRight />
              <p>
                Provided ongoing technical support, troubleshooting, and issue
                resolution to minimize downtime and enhance user experience.
              </p>
            </div>
            <div>
              <FaHandPointRight />
              <p>
                Contributed to an innovative project to restrict device
                connections to Wi-Fi networks, ensuring equal bandwidth
                consumption among users.
              </p>
            </div>
            <div>
              <FaHandPointRight />
              <p>
                Contributed to other projects, such as a voice bot and analysis
                applications dealing with the organization's sensitive data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 84vh;
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
      width: 13%;
      font-size: 23px;
      color: rgb(244, 244, 219);
    }
    hr {
      border: none;
      height: 2px;
      background-color: rgb(244, 244, 219);
      width: 87%;
    }
  }
  .experience-div {
    min-height: 75vh;
    background-color: rgb(243, 184, 38);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    .image-div {
      width: 25%;
      img {
        height: 300px;
      }
    }
    .content-div {
      display: flex;
      flex-direction: column;
      padding: 10px 10px;
      width: 73%;
      height: 90%;
      background-color: black;
      border-radius: 10px;
      margin-right: 10px;
      .header {
        height: 10%;
        display: flex;
        justify-content: space-between;
        div {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        p {
          color: rgb(244, 244, 219);
          font-style: italic;
        }
      }
      .exp-points {
        color: rgb(244, 244, 219);
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        div {
          display: flex;
          justify-content: center;
          gap: 1rem;
          svg {
            width: 3%;
            font-size: 17px;
          }
          p {
            width: 97%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: auto;
    max-width: 800px;
    padding: 5px 5px;
    .top-head {
      /* margin-top: 60px; */
      max-width: 150%;
      hr {
        margin-left: 95px;
        width: 60%;
      }
    }
    .experience-div {
      display: flex;
      justify-content: center;
      gap: 0;
      padding: 15px 0;
      min-height: auto; /* Allow it to expand */
      height: auto; /* Remove fixed height */
      .image-div {
        display: none;
      }
      .content-div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 16px;
        padding: 8px 8px;
        margin-left: 10px;
        width: 90%;
        height: auto; /* Let it adjust naturally */
        flex-grow: 1; /* Ensure it grows dynamically */
        .header {
          margin-top: 10px;
          flex-direction: column;
          width: 100%;
          margin-bottom: 10px;
        }
        .exp-points {
          gap: 5px;
        }
      }
    }
  }
`;
export default Experience;
