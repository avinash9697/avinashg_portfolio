import React, { useRef } from "react";
import styled from "styled-components";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

const Main = () => {
  return (
    <Container>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </Container>
  );
};
const Container = styled.div`
  background-color: rgb(244, 244, 219);
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
`;

export default Main;
