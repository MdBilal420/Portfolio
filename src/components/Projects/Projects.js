import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Blogs from "./Blogs";

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
              title="Dwidder"
              description="A Social Media App built with React + Redux + Material UI."
              features={["Create Post", "Like/Unlike/Delete posts", "Follow/Unfollow other users", "Search Users", "Edit/View profile", "Notifications"]}
              linkGit="https://github.com/MdBilal420/dwidder-socialmedia"
              linkLive="https://dwidder.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dukaan}
              title="Dukaan"
              description="Dukaan: An E-commerce App built in M.E.R.N (MongoDb, Express, ReactJS, NodeJS)"
              features={["Authentication", "Private and public routes", "Sorting and Filtering Products", "User actions: like add/remove from cart", "toggle wishlist", "Product description", "Increment/decrement quantity and Total price in Cart page"]}
              linkGit="https://github.com/MdBilal420/dukaan"
              linkLive="https://bigdukaan.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={viewdeo}
              isBlog={false}
              title="Viewdeo"
              description="A video library App built using ReactJS."
              features={["Create/Edit/Delete playlists", "Add/Remove videos from playlist", "Like/Unlike video", "Save video to watch later"]}
              linkGit="https://github.com/MdBilal420/viewdeo"
              linkLive="https://viewdeo.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quizz}
              isBlog={false}
              title="Quizzz"
              description="A Quizz webapp built with M.E.R.N and Typescript"
              features={["React + TypeScript", "JWT Authentication", "Used bcrypt to store passwords securely on MongoDB",
                "Clean and responsive layout useing Chakra UI",
                "Leaderboard"]}
              linkGit="https://github.com/MdBilal420/quiz-app"
              linkLive="https://queez.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={messy}
              isBlog={false}
              title="Messy UI"
              description="A CSS Component Library"
              features={[]}
              linkGit="https://github.com/MdBilal420/messy"
              linkLive="https://messyui.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Personal Portfolio."
              linkGit="https://github.com/MdBilal420/Portfolio"
            />
          </Col>
        </Row>
      </Container>
      <Blogs />
    </Container>
  );
}

export default Projects;
