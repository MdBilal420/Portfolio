import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import dwidder from "../../Assets/Projects/pro1.png";
import dukaan from "../../Assets/Projects/pro2.png";
import viewdeo from "../../Assets/Projects/pro3.png";
import quizz from "../../Assets/Projects/pro4.png";
import portfolio from "../../Assets/Projects/pro5.png";
import messy from "../../Assets/Projects/pro6.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dwidder}
              isBlog={false}
              title="Dwidder"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              linkGit=""
              linkLive=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dukaan}
              isBlog={false}
              title="Dukaan"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              linkGit=""
              linkLive=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={viewdeo}
              isBlog={false}
              title="Viewdeo"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              linkGit=""
              linkLive=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizz}
              isBlog={false}
              title="Quizzz"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              linkGit=""
              linkLive=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              linkGit=""
              linkLive=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={messy}
              isBlog={false}
              title="Messy UI"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              linkGit=""
              linkLive=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
