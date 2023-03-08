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
            Skilled Problem Solver with a talent for dissecting intricate
            challenges, a meticulous attention to detail, and a drive to uncover
            optimal solutions. Proficient in data analysis and adept at
            developing innovative tactics that yield measurable outcomes.
            Demonstrated success in swiftly and effectively devising novel
            approaches to complex problems. Quick to acquire new skills, with a
            proven track record of rapidly adapting to new technologies and
            methodologies to improve overall performance.
          </h2>
        </div>
        <div id="latest">
          <Container id="work">
            <Row>
              <h2>Operations Manager - Reverse Logistics</h2>
              <p id="amazon"></p>
              <h3>Amazon - Denver, CO March 2021 to Present</h3>
              <ul>
                <li>
                  • Directed and managed Reverse Logistics and Inventory Control
                  Quality Assurance (ICQA) departments, improving efficiency and
                  reducing costs.
                </li>
                <li>
                  • Revamped processes resulting in significant improvements in
                  2022: o Boosted Reverse Logistics throughput processing by
                  795%, processing 15,811 units per month in 2022, up from 1766
                  units per month in 2021. o Reduced Opportunity Costs of Goods
                  Sold from $100,000 per week down to $30,000 per week (Jan -
                  Mar 2022). o Decreased Controllable KPU Concessions by 47.57%,
                  from 7.42% to 3.89%, earning recognition for most improved for
                  Western U.S. region Q1.
                </li>
                <li>
                  • Developed and implemented a pallet build utilization
                  software program, reducing onsite trailer backlog from 90 days
                  to 3 days (Jan - Mar 2022).
                </li>
                <li>
                  • Coordinated with Corporate Operations Integration team to
                  roll out process tools and Web UIs, conducting field testing
                  and pilot programs.
                </li>
                <li>
                  • Managed scheduling of all Reverse Logistic carrier loads,
                  ensuring timely and efficient transport.
                </li>
                <li>
                  • Seasoned Manager with a track record of successfully leading
                  a team of 40 employees to achieve outstanding results. Skilled
                  in fostering a collaborative work environment, setting clear
                  expectations, and providing regular feedback to support
                  professional growth. Recognized for developing and mentoring
                  five employees who have since been promoted to managerial
                  positions within the company, reflecting a dedication to
                  talent development and succession planning.
                </li>
              </ul>
            </Row>

            <Row>
              <h2>Financial Advisor Internship</h2>
              <p id='nm'></p>
              <h3>
                Northwestern Mutual - Boulder, CO May 2016 to November 2017
              </h3>
              <ul>
                <li>
                  • Guided clients through the financial planning process from
                  initial consultation to plan implementation, analyzing
                  financial data, and recommending appropriate products and
                  services to meet their goals.
                </li>
                <li>
                  • Successfully led a team of three other interns, providing
                  guidance and support to achieve individual and team production
                  goals.
                </li>
                <li>
                  • Consistently provided exceptional customer service, earning
                  recognition as a top performer and achieving a ranking in the
                  top 10% of all interns nationwide.
                </li>
                <li>
                  • Developed expertise in financial planning strategies,
                  retirement planning, risk management, and investment products.
                </li>
                <li>
                  • Conducted market research and analysis to identify
                  opportunities for growth and expansion of client base.
                </li>
                <li>
                  • Collaborated with financial advisors and team members to
                  develop and implement marketing strategies and initiatives to
                  increase business growth and client engagement.
                </li>
                <li>
                  • Utilized software and tools such as Excel, Salesforce, and
                  Morningstar to track client data, analyze market trends, and
                  support financial planning processes.
                </li>
              </ul>
            </Row>
            <Row>
              <h2>Education:</h2>
              <p id="csu"></p>
              <h3>
                Bachelor's degree in Economics, Minor in Real Estate, and a
                Minor in Business Administration Colorado State University-Fort
                Collins - Fort Collins, CO August 2015 to December 2020
              </h3>
              <p id="ud"></p>
              <h3>
                Certificate in Software Engineering University of Denver -
                Denver, CO August 2022 to February 2023
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
