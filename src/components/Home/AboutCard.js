import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mohammad Bilal </span>
            from <span className="purple"> Lucknow, India.</span>
            <br />I am a Full Stack Web Developer experience in building and maintaining responsive websites.
            <br />Proficient in <span className="purple">HTML, CSS, JavaScript</span> and plus modern libraries
            and frameworks such as <span className="purple">ReactJs, ExpressJS and MongoDB</span>.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watch Shows, Movies and Sports.
            </li>
            <li className="about-activity">
              <ImPointRight /> Read Blogs and articles.
            </li>
          </ul>

          {/* <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Bilal</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
