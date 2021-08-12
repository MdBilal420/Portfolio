import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCards from "./BlogCards";
import Particle from "../Particle";

import b1 from "../../Assets/Projects/blog1.JPG";
import b2 from "../../Assets/Projects/blog2.JPG";
import b3 from "../../Assets/Projects/blog3.JPG";

function Blogs() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Blogs </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few blogs I've written recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <BlogCards
                            imgPath={b1}
                            title="useEffect"
                            link="https://hashnode.com/post/useeffect-what-when-and-how-ckr38qn560s70qus13zac2vrr"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <BlogCards
                            imgPath={b2}
                            title="To-Do App in ReactJS"
                            link="https://hashnode.com/post/to-do-app-in-reactjs-ckr2lqvh10o4epts10z82686o"

                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <BlogCards
                            imgPath={b3}
                            title="Working with Objects in TypeScript"
                            link="https://hashnode.com/post/working-with-objects-in-typescript-ckr2ihr1l0netqus1bub085f0"
                        />
                    </Col>


                </Row>
            </Container>
        </Container>
    );
}

export default Blogs;
