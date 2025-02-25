import React from "react";
import styled from "styled-components";
import image from "../images/test.png";

const Hero = () => {
  return (
    <Container id="hero">
      <div className="details">
        <h1>Hello, I am Avinash Guntuboina</h1>
        <h3>Junior Software Engineer</h3>
        <button>
          <a href="#contact">Reach Out</a>
        </button>
      </div>
      <div className="image">
        <img src={image} alt="design-image" />
      </div>
      <div className="simple">
        <p>
          "I specialize in building dynamic and scalable web applications,
          crafting elegant UI/UX, and solving complex backend problems."
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 70px;
  height: 60vh;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 120px;
  width: 100%;
  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      color: #fff;
    }
    h3 {
      text-align: center;
      font-size: 20px;
      color: rgb(243, 184, 38);
    }
    button {
      background-color: rgb(244, 244, 219);
      margin-top: 14px;
      height: 40px;
      width: 120px;
      border-radius: 8px;
      border: 0;
      cursor: pointer;
      /* background-color: rgb(243, 184, 38); */
      transition: 0.3s ease-in-out;
      &:hover {
        transform: scale(1.2);
      }
      a {
        text-decoration: none;
        text-align: center;
        font-size: 14px;
        color: black;
      }
    }
  }
  .image {
    img {
      height: 500px;
    }
  }
  .simple {
    display: none;
  }
  @media screen and (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 0;
    padding: 5px 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .details {
      h1 {
        font-size: 20px;
      }
      h3 {
        font-size: 17px;
      }
    }
    .image {
      img {
        height: 200px;
      }
    }
    .simple {
      color: rgb(244, 244, 219);
      display: block;
      font-style: italic;
      font-size: 14px;
      text-align: center;
    }
  }
`;
export default Hero;
