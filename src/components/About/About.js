import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Container style={{ justifyContent: "center", position: "relative", marginBottom: 40 }}>
          <h1 className="project-heading">
            My <strong className="purple">Resume </strong>
          </h1>
          <Button variant="primary" href="https://drive.google.com/file/d/1t5A8cPBkjinA0KHuwO6-WTvfuuipywbR/view?usp=sharing" target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Container>
        <h1 className="project-heading">
          My <strong className="purple">Skills </strong>
        </h1>

        <Techstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
