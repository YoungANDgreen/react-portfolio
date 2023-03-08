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
                    Full Stack Developer with a passion for user-friendly
                    applications.
                  </li>
                  <li>
                    Innovative Entrepreneur with a focus on addressing key
                    challenges through forward-thinking solutions.
                  </li>
                  <li>Fan of all things to do with Javascript and AI.</li>
                  <li>
                    {" "}
                    Skilled in leveraging market insights to drive innovation
                    and create value for customers and stakeholders..
                  </li>
                </ul>
              </Col>

              <Col>
                <h2 id="abz">About Me:</h2>
                <ul id="containac">
                  <li>
                    Love to travel and experience the world. Fiji being my
                    favorite.
                  </li>
                  <li>
                    I get excited hearing what people are passionate about.
                  </li>
                  <li>
                    Believe as a community we can come together to move
                    mountains.
                  </li>
                  <li>
                    Dedicated to ongoing personal growth through continuous
                    learning and skill development to excel both personally and
                    professionally..
                  </li>
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
