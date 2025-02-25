import React, { useRef } from "react";
import styled from "styled-components";
import { TbPointFilled } from "react-icons/tb";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  const scrollRef = useRef(null);
  const scrollAmount = window.innerWidth <= 768 ? 340 : 450;

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollAmount;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <Container id="projects">
      <div className="top-head">
        <hr />
        <h3>{"<Projects/>"}</h3>
      </div>
      <div className="scroll-container">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>
        <div className="project-main-div" ref={scrollRef}>
          <div className="project">
            <div className="project-header">
              <h3>Metaverse: Geospatial Insights Application</h3>
              <p>
                An application that provides detailed insights into service
                areas through geographical data. It helps assess service
                feasibility and analyze region-specific data, streamlining the
                customer onboarding process
              </p>
            </div>
            <hr />
            <ul>
              <li>
                <TbPointFilled />
                <span>
                  Implemented geospatial data analysis for customer locations.
                </span>
              </li>
              <li>
                <TbPointFilled />
                <span>
                  Integrated geocoding and reverse geocoding to map customer
                  addresses accurately.
                </span>
              </li>
              <li>
                <TbPointFilled />
                <span>
                  Developed geofencing features to check if customers fall
                  within service zones.
                </span>
              </li>
              <li>
                <TbPointFilled />
                <span>
                  Implemented geospatial data analysis for customer locations.
                </span>
              </li>
              <li>
                <TbPointFilled />
                <span>
                  Created APIs to fetch customer data by region, state, city, or
                  zone, with additional filters for detailed insights.
                </span>
              </li>
            </ul>
            <p>
              The purpose of application is to assist our organization in
              understanding customer locations, determining service feasibility,
              and analyzing region-wise data during the onboarding process.
            </p>
          </div>
          <div className="project">
            <div className="project-header">
              <h3>Wi-Fi sharing Application</h3>
              <p>
                An application for onboarding customers with device and
                bandwidth limits, ensuring fair Wi-Fi usage. It includes renewal
                options and payment integration for adding devices, offering
                flexibility and ease of use.
              </p>
            </div>
            <hr />
            <ul>
              <li>
                <TbPointFilled />
                <span>
                  Onboarded customers with configurable device and bandwidth
                  limits using pfSense.
                </span>
              </li>
              <li>
                <TbPointFilled />
                <span>
                  Enabled payment integration for customers to add more devices
                  as needed.
                </span>
              </li>
              <li>
                <TbPointFilled />
                <span>
                  Designed detailed dashboards for various roles, managed via
                  RBAC (Role-Based Access Control), to provide insights into
                  data usage, connected devices, and other critical metrics.
                </span>
              </li>
              <li>
                <TbPointFilled />
                <span>
                  Made it easier to manage customers and gain clear insights
                  into Wi-Fi usage with user-friendly interfaces and real-time
                  data.
                </span>
              </li>
            </ul>
            <p>
              The purpose of application is to provide an efficient and
              equitable Wi-Fi management system, ensuring fair bandwidth
              distribution while offering flexibility for users to expand their
              connections as needed.
            </p>
          </div>
          <div className="project">
            <div className="project-header">
              <h3>Plan Management System</h3>
              <p>
                An application designed to make managing customer plans simple
                and efficient, providing the management team with clear insights
                and effective tools to handle plans effortlessly.
              </p>
            </div>
            <hr />
            <ul>
              <li>
                <TbPointFilled />
                <span>
                  Developed features for creating, updating, and managing
                  customer plans smoothly and accurately.
                </span>
              </li>
              <li>
                <TbPointFilled />
                <span>
                  Designed interactive dashboards to provide detailed insights
                  into each plan, including metrics such as the number of
                  assigned customers, usage trends, and overall performance.
                </span>
              </li>
              <li>
                <TbPointFilled />
                <span>
                  Provided management teams with intuitive features to monitor,
                  analyze, and enhance plan performance with ease.
                </span>
              </li>
            </ul>
            <p>
              The purpose of this application is to provide insights into the
              available plans, track how many users are assigned to each plan,
              and offer detailed information to help manage and optimize plan
              allocations effectively.
            </p>
          </div>
          <div className="project">
            <h3 style={{ color: "rgb(244, 244, 219)" }}>Personal Projects</h3>
            <div className="project-1">
              <h4 style={{ color: "rgb(244, 244, 219)" }}>
                E-commerce Platform
              </h4>
              <p>
                A full-stack e-commerce platform built using the MERN stack.
              </p>
              <ul>
                <li>
                  <TbPointFilled />
                  <span>
                    Implemented Context API for state management across the
                    application.
                  </span>
                </li>
                <li>
                  <TbPointFilled />
                  <span>
                    Designed and integrated RESTful APIs for data communication
                    between the frontend and backend.
                  </span>
                </li>
                <li>
                  <TbPointFilled />
                  <span>
                    Developed user authentication and authorization for secure
                    transactions.
                  </span>
                </li>
              </ul>
            </div>
            <hr />
            <div className="project-2">
              <h4 style={{ color: "rgb(244, 244, 219)" }}>YouTube Clone</h4>
              <p style={{ color: "rgb(244, 244, 219)" }}>
                A web application replicating the core features of YouTube.
              </p>
              <ul>
                <li>
                  <TbPointFilled />
                  <span>
                    Utilized React for an interactive and responsive UI.
                  </span>
                </li>
                <li>
                  <TbPointFilled />
                  <span>
                    Integrated YouTube Google APIs to fetch and display video
                    content dynamically.
                  </span>
                </li>
              </ul>
            </div>
            <hr />
            <div className="project-3">
              <h4 style={{ color: "rgb(244, 244, 219)" }}>
                Real-Time Chat App
              </h4>
              <p style={{ color: "rgb(244, 244, 219)" }}>
                A real-time chat application with instant messaging and user
                authentication.
              </p>
              <ul>
                <li>
                  <TbPointFilled />
                  <span>
                    Built with <strong>MERN Stack</strong> (MongoDB, Express,
                    React, Node.js) for a seamless full-stack experience.
                  </span>
                </li>
                <li>
                  <TbPointFilled />
                  <span>
                    Implemented <strong>Socket.io</strong> for real-time
                    bidirectional communication between users.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button className="scroll-btn right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: auto;
  max-width: 100%;
  background-color: black;
  box-sizing: border-box;
  padding: 2px 100px;
  /* margin-top: 20px; */
  .top-head {
    margin-top: 20px;
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    gap: 1rem;
    h3 {
      width: 10%;
      font-size: 23px;
      color: rgb(244, 244, 219);
    }
    hr {
      border: none;
      height: 2px;
      background-color: rgb(244, 244, 219);
      width: 90%;
    }
  }
  .scroll-container {
    display: flex;
    align-items: center;
    position: relative;
  }
  .scroll-btn {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 20px;
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
  }
  .left {
    left: 10px;
  }
  .right {
    right: 10px;
  }
  .project-main-div {
    min-height: 60vh;
    background-color: rgb(243, 184, 38);
    border-radius: 10px;
    padding: 8px 8px;
    display: flex;
    gap: 0.5rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    min-width: 100%;
    &::-webkit-scrollbar {
      height: 5px;
    }
    &::-webkit-scrollbar-track {
      background: #fff;
      border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background: black;
      border-radius: 3px;
    }

    .project {
      flex: 0 0 430px;
      width: 430px;
      max-width: 430px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.5rem;
      background-color: black;
      padding: 5px 5px;
      border-radius: 10px;
      .project-header {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin: 5px auto;
        h3 {
          color: rgb(244, 244, 219);
          font-size: 18px;
        }
        p {
          color: rgb(244, 244, 219);
          font-size: 15px;
        }
      }
      ul {
        list-style-type: none;
        li {
          display: flex;
          gap: 0.5rem;
          svg {
            width: 7%;
            color: rgb(244, 244, 219);
          }
          span {
            color: rgb(244, 244, 219);
            width: 93%;
            font-size: 15px;
          }
        }
      }
      p {
        color: rgb(244, 244, 219);
        font-size: 15px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: 110vh;
    max-width: 800px;
    padding: 5px 5px;
    .top-head {
      align-items: center;
      gap: 5px;
      h3 {
        width: 20%;
        font-size: 20px;
        text-align: end;
      }
      hr {
        width: 65%;
      }
    }
    .project-main-div {
      gap: 0.2rem;
      .project {
        flex: 0 0 335spx;
        width: 335px;
        max-width: 335px;
      }
    }
  }
`;

export default Projects;
