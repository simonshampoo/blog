import React from "react";
import image from "./assets/img.jpg";
import "./Homepage.css";
// import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
// import { BrowserRouter as Router, Link } from "react-router-dom";
// import Graphs from "./components/Graphs";

const Navigation = () => {
  return <>hello</>;
};

const Homepage = () => {
  return (
    <div className="everything">
      <div className="nav">
        <span>
          <a href="/">&nbsp;&nbsp;simonshampoo.io</a>
          &nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/">blog</a>
          &nbsp;&nbsp;&nbsp;&nbsp; { // this is bad, i need to fix with css 
          }
          <a href="/">projects</a>
        </span>
      </div>

      <div className="aboutMe">
        <h2>Hi</h2>{" "}
        <span>
          <img className="me" src={image} />
        </span>
        <div className="intro">
          <p>
            {" "}
            My name is Simon Shamoon, this is my blog and a glimpse into my
            programming life. <br/>
            <br /> In addition, I will also be updating this site with <br />
            data structures & algorithms interview prep.
          </p>
          <span></span>
        </div>
        <div className="curr">
          <h2>About me</h2>
          <p>
            Currently:
            <ul>
              <li>Equities Trader Intern at Edward Jones</li>
              <li>Learning full-stack web development</li>
              <li>
                Wanting to get into fintech or blockchain/defi development
              </li>
            </ul>
          </p>
          <p>
            Interests:
            <ul>
              <li>web development</li>
              <li>blockchain</li>
              <li>capital markets</li>
              <li>algorithms</li>
              <li>Dota 2</li>
            </ul>
          </p>
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
