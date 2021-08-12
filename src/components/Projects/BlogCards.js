import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function BlogsCards(props) {
    return (
        <a
            className="blog-link"
            href={props.link}
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: "1.2em" }}
        >
            <Card className="blog-card-view">
                <Card.Img variant="top" src={props.imgPath} className="blog-img" />
                <Card.Footer>
                    <i className="fas fa-external-link-square-alt">&nbsp;</i>
                    {props.title}

                    <p style={{ marginBlockEnd: "0em" }}>{props.site}</p>
                    {/* <Button variant="primary" href={props.link} target="_blank">
                        <BiLinkExternal /> &nbsp;
                        Read Blog
                    </Button> */}
                </Card.Footer>
            </Card>
        </a>
    );
}

export default BlogsCards;