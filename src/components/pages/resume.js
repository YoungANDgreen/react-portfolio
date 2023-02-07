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
import { SiLinkedin } from "react-icons/si";
import { SiStackoverflow } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import Button from "react-bootstrap/Button";

export default function Resume() {
  return (
    <div>
    <div id="resume">
      <div id="reshead">
        <h2>
          Experienced Problem Solver who possesses an in-depth understanding of
          complex issues, a keen eye for detail, and a passion for finding the
          best solution to any problem. Highly skilled at analyzing data and
          forming creative strategies that deliver tangible results. Proven
          track record of identifying innovative solutions to difficult problems
          quickly and efficiently.
        </h2>
      </div>
      <div id="latest">
        <Container id="work">
          <Row>
            <h2>Operations Manager - Reverse Logistics</h2>
            <h3>Amazon - Denver, CO March 2020 to Present</h3>
            <ul>
              <li>
                1. Increased Reverse Logistics throughput processing by 795%
                1766 units Jan 2022 to 15,811 Units Mar 2022
              </li>
              <li>
                2. Reduced Opportunity Costs of Goods Sold from $100,000 per
                week down to $6,000 per week Jan to Mar 2022 with sustained
                performance through present day.
              </li>
              <li>
                3.Created and implemented pallet build utilization software
                program to reduce onsite trailer backlog from 90 days to 3 days
                Jan to Mar 2022. Directed Programs and their rollout +
                improvements of process tools and Web UIs in coordination with
                Corporate Operations Integration team conducting field testing
                and pilot programs.
              </li>
              <li>
                4. Reduced Controllable KPI Concessions 47.57% from 7.42% to
                3.89%. Awarded most improved for Western U.S. region Q1. Awarded
                2022 Q1 through Q4 highest performer for Customer Concessions.
              </li>
            </ul>
          </Row>

          <Row>
            <h2>Founding Member</h2>
            <h3>Mt. CBD - Broomfield, CO November 2017 to February 2020</h3>
            <ul>
              <li>
                Currently active as board member. Headed Research and
                Development as well as Supply Chain Management. Reduced Cost of
                Goods sold by 27% $3.15 per bottle to $2.29 per bottle through
                partnership with and sourcing of new suppliers. Increased
                production capacity capability up to 90,000 gallons per month by
                implementation of second bottling line adjacent to original.
              </li>
            </ul>
          </Row>
          <Row>
            <h2>Financial Advisor Internship</h2>
            <h3>Northwestern Mutual - Boulder, CO May 2016 to November 2017</h3>
            <ul>
              <li>
                Managed client financial planning process from start to finish
                developing meaasurable milestones and allocating resources in
                planning to achieve goals outline.
              </li>
              <li>
                Led a team of 3 other interns and achieved top 10% of all
                interns in United States for production and customer service
              </li>
            </ul>
          </Row>
          <Row>
            <h2>Education:</h2>
            <p id="csu"></p>
            <h3>
              Bachelor's degree in Economics Minor in Real Estate Minor in
              Business Administration Colorado State University-Fort Collins -
              Fort Collins, CO August 2015 to December 2020
            </h3>
            <p id="ud"></p>
            <h3>
              Certificate in Software Engineering University of Denver - Denver,
              CO August 2022 to February 2023
            </h3>
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
