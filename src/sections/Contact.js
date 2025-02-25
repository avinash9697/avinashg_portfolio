import React from "react";
import styled from "styled-components";
import { FaAddressCard } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <Container id="contact">
      <div className="top-head">
        <h3>{"<Contact/>"}</h3>
        <hr />
      </div>
      <div className="contact-main">
        <div className="header">
          <h1>Let's Connect</h1>
          <p>Below are the details to reach out to me!</p>
        </div>
        <div className="details">
          <div className="card">
            <div className="svg-div">
              <FaAddressCard color="rgb(243, 184, 38)" />
            </div>
            <div className="sub">
              <h5>ADDRESS</h5>
              <p>Bengaluru, India</p>
            </div>
          </div>
          <div className="card">
            <div className="svg-div">
              <FaPhoneSquareAlt color="rgb(243, 184, 38)" />
            </div>
            <div className="sub">
              <h5>CONTACT NUMBER</h5>
              <p>+91 9392538076</p>
            </div>
          </div>
          <div className="card">
            <div className="svg-div">
              <MdEmail color="rgb(243, 184, 38)" />
            </div>
            <div className="sub">
              <h5>EMAIL ADDRESS</h5>
              <p>avinash.guntuboina7@gmail.com</p>
            </div>
          </div>
          <div className="card">
            <div className="svg-div">
              <ImProfile color="rgb(243, 184, 38)" />
            </div>
            <div className="sub">
              <h5>DOWNLOAD RESUME</h5>

              <a
                href="/my_latest_2025.pdf"
                download="My_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "rgb(100, 100, 100)",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="card">
            <div className="svg-div">
              <FaLinkedin color="rgb(243, 184, 38)" />
            </div>
            <div className="sub">
              <h5>LinkedIn</h5>
              <a
                href="https://www.linkedin.com/in/avinash-guntuboina-04889b191"
                style={{
                  color: "rgb(100  ,100 ,100)",
                  textDecoration: "none",
                  textAlign: "center",
                }}
              >
                view profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 50vh;
  max-width: 100%;
  background-color: black;
  box-sizing: border-box;
  padding: 2px 100px;
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
  .contact-main {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        color: rgb(244, 244, 219);
      }
      p {
        color: rgb(244, 244, 219);
      }
    }
    .details {
      display: flex;
      justify-content: space-evenly;
      gap: 2rem;
      .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;

        .sub {
          h5 {
            text-align: center;
            color: rgb(244, 244, 219);
          }
          p {
            text-align: center;
            color: rgb(100, 100, 100);
          }
        }
        .svg-div {
          background-color: rgb(100, 100, 100);
          height: 70px;
          width: 70px;
          border-radius: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          svg {
            font-size: 25px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: 65vh;
    max-width: 800px;
    padding: 5px 5px;
    .top-head {
      margin-top: 40px;
      max-width: 100%;
      hr {
        margin-left: 80px;
        width: 80%;
      }
    }
    .contact-main {
      .details {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        /* flex-wrap: wrap; */
        .card {
          padding-left: 10px;
          width: 100%;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          .sub {
            width: 80%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .svg-div {
            width: 20%;
            height: 40px;
            width: 40px;
            svg {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
`;

export default Contact;
