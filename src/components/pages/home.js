import React from "react";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { SiLinkedin } from "react-icons/si";
import { SiStackoverflow } from "react-icons/si";
import { SiGithub } from "react-icons/si";

export default function Home() {
  return (
    <div>
    <div id="about">
      <h1 id="intro">Hi, I'm Ryan!</h1>
      <p id="ryan"></p>
      <div id="lis">
        <Container>
          <Row>
            <Col>
              <h2 id="abp">Who Am I?</h2>
              <ul id="containab">
                <li>
                  Full Stack Developer with a passion for Front End
                  applications.
                </li>
                <li>
                  Entreprenuer focused on introducing innovative solutions to
                  key issues.
                </li>
                <li>Fan of all things Javascript.</li>
                <li>Competitor that is hungry for a challenge.</li>
              </ul>
            </Col>

            <Col>
              <h2 id="abz">About Me:</h2>
              <ul id="containac">
                <li>
                  Love to travel and experience the world. Fiji being my
                  favorite.
                </li>
                <li>I get excited hearing what people are passionate about.</li>
                <li>
                  Believe as a community we can come together to move mountains.
                </li>
                <li>Always root for the underdog.</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <h2>Favorite Languages and Tools:</h2>
        <Container>
          <Row>
            <Col>
              <FaReact color="Black" size={55} />
            </Col>
            <Col>
              <TbBrandJavascript color="Black" size={55} />
            </Col>
            <Col>
              <FaHtml5 color="Black" size={55} />
            </Col>

            <Col>
              <FaBootstrap color="Black" size={55} />
            </Col>
            <Col>
              <FaNodeJs color="Black" size={55} />
            </Col>
            <Col>
              <SiMysql color="Black" size={55} />
            </Col>
          </Row>
        </Container>
      </div>

    </div>
    <div id="footer">
        <Button
          id="footb"
          href="https://github.com/YoungANDgreen"
          variant="primary"
        >
          {" "}
          <SiGithub color="#020300" size={55} />
        </Button>
        <Button
          id="footb"
          href="https://www.linkedin.com/in/ryan-younggreen-3622b913b/"
          variant="primary"
        >
          {" "}
          <SiLinkedin color="#020300" size={55} />
        </Button>
        <Button
          id="footb"
          href="https://stackoverflow.com/users/21160819/younggreen"
          variant="primary"
        >
          {" "}
          <SiStackoverflow color="#020300" size={55} />
        </Button>
      </div>
    </div>
  );
}
