import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg"

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" size="large" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="secondary" style={{ margin: 20, backgroundColor: "#050505" }} href={props.linkLive} target="_blank">
          <CgWebsite /> &nbsp;
          Live Demo
        </Button>
        <Button variant="primary" href={props.linkGit} target="_blank">
          <BiLinkExternal /> &nbsp;
          View Project
        </Button>

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
