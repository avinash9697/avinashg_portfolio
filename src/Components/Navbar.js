import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import AvinashG3 from "../images/AvinashG3.png";
import { FaUserAstronaut } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <div className="main-heading">
        {/* <FaUserAstronaut /> */}
        <h3>
          <a href="#hero">
            <img src={AvinashG3} alt="logo" style={{ height: "80px" }} />
          </a>
        </h3>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`links ${isOpen ? "open" : ""}`}>
        <a
          href="#about"
          onClick={(e) => {
            toggleMenu();
          }}
        >
          About
        </a>
        <a href="#skills" onClick={toggleMenu}>
          Skills
        </a>
        <a href="#experience" onClick={toggleMenu}>
          Experience
        </a>
        <a href="#projects" onClick={toggleMenu}>
          Projects
        </a>
        <a href="#contact" onClick={toggleMenu}>
          Contact
        </a>
      </div>
    </Nav>
  );
};

const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: black;
  box-sizing: border-box;
  height: 10vh;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  .main-heading {
    display: flex;
    align-items: center;
    gap: 10px;
    transition: transform 0.3s ease-in-out;
    svg {
      font-size: 20px;
    }
    a {
      text-decoration: none;
      font-weight: bold;
      color: black;
    }
    &:hover {
      transform: scale(1.2);
    }
  }

  .hamburger {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: rgb(244, 244, 219);
  }

  .links {
    display: flex;
    gap: 1rem;
    a {
      text-decoration: none;
      color: rgb(244, 244, 219);
      position: relative;
      font-weight: 500;
      transition: color 0.3s ease-in-out;

      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 100%;
        height: 2px;
        background-color: rgb(244, 244, 219);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease-in-out;
      }
      &:hover {
        color: rgb(100, 100, 100);
      }
      &:hover::after {
        transform: scaleX(1);
      }
    }
  }

  @media (max-width: 768px) {
    .hamburger {
      display: block;
    }

    .links {
      position: absolute;
      top: 10vh;
      left: 0;
      width: 100%;
      background-color: black;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0;
      display: none;
    }

    .links.open {
      display: flex;
    }
  }
`;

export default Navbar;
