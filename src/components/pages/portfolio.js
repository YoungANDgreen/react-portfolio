import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiStackoverflow } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandCss3 } from "react-icons/tb";
import { SiNodedotjs } from "react-icons/si";

export default function Portfolio() {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-2 g-4" id="portfolio">
        <Card class="col" style={{ width: "25rem" }} id="project-card">
          <Card.Body>
            <Card.Title>LiftAI</Card.Title>
            <Card.Text>
              AI powered app that takes the question out of what you should do
              for your workout!
            </Card.Text>
            <Card.Text>
              Languages used: <TbBrandJavascript color="#715AFF" size={55} />{" "}
              <FaHtml5 color="#715AFF" size={55} />
              <TbBrandCss3 color="#715AFF" size={55} />
            </Card.Text>
            <Card.Text>
              Program and tools: <FaReact color="#715AFF" size={55} />
            </Card.Text>
            <Card.Text>
              Java Runtime Environments:{" "}
              <SiNodedotjs color="#715AFF" size={55} />
            </Card.Text>
            <Button href="https://liftai.herokuapp.com/" variant="primary">
              Open
              <Card.Link></Card.Link>
            </Button>
          </Card.Body>
        </Card>

        <Card class="col" style={{ width: "25rem" }} id="project-card">
          <Card.Body>
            <Card.Title>Poketracker</Card.Title>
            <Card.Text>
              Web Application that allows users to create an account and track
              the Pokemon that they catch across all games.
            </Card.Text>
            <Card.Text>
              Languages used: <TbBrandJavascript color="#715AFF" size={55} />{" "}
              <FaHtml5 color="#715AFF" size={55} />
              <TbBrandCss3 color="#715AFF" size={55} />
            </Card.Text>
            <Card.Text>
              Program and tools: <FaReact color="#715AFF" size={55} />
              <SiMongodb color="#715AFF" size={55} />
            </Card.Text>
            <Card.Text>
              Frameworks & libraries: <FaBootstrap color="#715AFF" size={55} />
            </Card.Text>
            <Card.Text>
              Java Runtime Environments:{" "}
              <SiNodedotjs color="#715AFF" size={55} />
            </Card.Text>
            <Button
              href="https://poketrakerapp.herokuapp.com/"
              variant="primary"
            >
              Open
              <Card.Link href="https://poketrakerapp.herokuapp.com/"></Card.Link>
            </Button>
          </Card.Body>
        </Card>

        <Card class="col" style={{ width: "25rem" }} id="project-card">
          <Card.Body>
            <Card.Title>Weather Dashboard</Card.Title>
            <Card.Text>
              Dashboard that returns local weather for searched city by
              utilizing Open Weather API.
            </Card.Text>
            <Card.Text>
              Languages used: <TbBrandJavascript color="#715AFF" size={55} />{" "}
              <FaHtml5 color="#715AFF" size={55} />
              <TbBrandCss3 color="#715AFF" size={55} />
            </Card.Text>
            <Card.Text>
              Frameworks & libraries: <FaBootstrap color="#715AFF" size={55} />
            </Card.Text>
            <Button
              href="https://youngandgreen.github.io/Weather-dashboard/"
              variant="primary"
            >
              Open
              <Card.Link href="https://youngandgreen.github.io/Weather-dashboard/"></Card.Link>
            </Button>
          </Card.Body>
        </Card>

        <Card class="col" style={{ width: "25rem" }} id="project-card">
          <Card.Body>
            <Card.Title>Regex Tutorial</Card.Title>
            <Card.Text>
              Regex 'Regular Expression' tutorial on how to validate an email
              utilizing the basics of Regex syntax.
            </Card.Text>
            <Card.Text>
              Program and tools: <SiGithub color="#715AFF" size={55} />
            </Card.Text>
            <Button
              href="https://gist.github.com/YoungANDgreen/ed27d59e6dc090e4a7823fe5497f2be4"
              variant="primary"
            >
              Open
              <Card.Link></Card.Link>
            </Button>
          </Card.Body>
        </Card>

        <Card class="col" style={{ width: "25rem" }} id="project-card">
          <Card.Body>
            <Card.Title>Ecommerce-backend</Card.Title>
            <Card.Text>
              Back-end application to be able to create a database and view,
              post, update, and delete its contents.
            </Card.Text>
            <Card.Text>
              Languages used: <TbBrandJavascript color="#715AFF" size={55} />{" "}
            </Card.Text>
            <Card.Text>
              Program and tools: <SiMysql color="#715AFF" size={55} />
            </Card.Text>
            <Card.Text>
              Java Runtime Environments:{" "}
              <SiNodedotjs color="#715AFF" size={55} />
            </Card.Text>
            <Button
              href="https://github.com/YoungANDgreen/ecommerce-backend"
              variant="primary"
            >
              Open
              <Card.Link></Card.Link>
            </Button>
          </Card.Body>
        </Card>
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
