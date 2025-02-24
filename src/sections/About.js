import React from "react";
import styled from "styled-components";
import { FaHandPointRight } from "react-icons/fa";

const About = () => {
  return (
    <Container id="about">
      <div className="top-head">
        <h3>{"<About/>"}</h3>
        <hr />
      </div>

      <div className="about-sec">
        <p>
          <FaHandPointRight className="icon1" />
          <span>
            My journey into the tech world has been an exciting adventure. I
            started my career with a Bachelor’s degree in Civil Engineering and
            spent three years working in the civil sector. While I enjoyed that
            chapter of my life, I felt a growing passion for technology that I
            couldn’t ignore. So, I took a leap of faith and transitioned into
            IT, and I’ve never looked back!
          </span>
        </p>
        <p>
          <FaHandPointRight className="icon1" />
          <span>
            For the past two years, I’ve been working as a Junior Engineer,
            diving deep into the MERN stack and picking up some Python skills
            along the way. I’ve worked on exciting projects that challenged me
            to learn and grow, and I’m always looking forward to taking on new
            opportunities where I can make an impact.
          </span>
        </p>
        <p style={{ fontStyle: "italic" }}>
          "Beyond work, I love trekking—it’s my way of embracing challenges and
          reconnecting with nature."
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 50vh;
  background-color: black;
  box-sizing: border-box;
  padding: 30px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .top-head {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    h3 {
      align-self: flex-start;
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
  .about-sec {
    border-radius: 10px;
    padding: 15px 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: rgb(243, 184, 38);
    p {
      display: flex;
      span {
        margin-top: 7px;
      }
      .icon1 {
        font-size: 40px;
        margin-right: 10px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: 90vh;
    /* margin-top: 20px; */
    max-width: 800px;
    padding: 5px 5px;
    .top-head {
      /* margin-top: 60px; */
      max-width: 100%;
      hr {
        margin-left: 70px;
        width: 80%;
      }
    }
    .about-sec {
      padding: 0 10px;
      height: 85vh;
      width: 100%;
    }
  }
`;
export default About;
