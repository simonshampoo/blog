import React from "react";
import "./Homepage.css";
// import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import Graphs from "./components/Graphs";

const Homepage = () => {
  return (
    <div className="everything">
      <div className="aboutMe">
        <h2>Hi</h2>{" "}
        <div className="intro">
          <p>
            {" "}
            My name is Simon Shamoon, this is my blog and a glimpse into my
            programming life. <br />
            <br /> In addition, I will also be updating this site with <br />
            data structures & algorithms interview prep.
          </p>
        </div>
        <div className="curr">
          <h2>About me</h2>
          Currently:
          <ul>
            <li>Equities Trader Intern at Edward Jones</li>
            <li>Learning full-stack web development</li>
            <li>
              Wanting to get into fintech, e-commerce, or blockchain/DeFi
              development
            </li>
          </ul>
          Interests:
          <ul>
            <li>web development (React)</li>
            <li>blockchain and crypto</li>
            <li>capital markets and finance</li>
            <li>algorithms and grinding leetcode</li>
            <li>Dota 2</li>
          </ul>
          <p>
            You can contact me at{" "}
            <a href="simonshm5@gmail.com">simonshm5@gmail.com</a> or my{" "}
            <a href="https://linkedin.com/in/simon-shamoon">LinkedIn.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
