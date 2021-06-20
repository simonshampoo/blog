import React from "react";
import particleRollPicture from "./project_assets/particleroll.PNG";
import gapCovidPicture from "./project_assets/gapcovid.PNG";
import chatPicture from "./project_assets/chatwiththebros.PNG";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projectContainer">
      <div className="children">
        <ul>
          <li>
            <a href="https://github.com/simonshm5/particle_roll_island_generator">
              C++ DFS particle roll island generator (C++, termcolor)
            </a>
            <br />

            <img src={particleRollPicture} alt = "particleroll" />
          </li>
          <li>
            <a href="https://github.com/simonshm5/gap-data-science-covid">
              Gap Covid Analytics (Javascript, React.js, Canvas.js, Node.js)
            </a>
            <br />

            <img src={gapCovidPicture} alt = "covidgraphs" />
          </li>
          <li>
            {" "}
            <a href="https://chatwiththebros.netlify.app/ ">
              ChatWithTheBros (Javascript, React.js, chatengine.io API) //use
              username: <code>testuser</code> and password: <code>123</code>
            </a>
            <br />
            <img src={chatPicture} alt = "chatting application"/>
          </li>
          <li>This site! (Javascript, React.js)</li>
          <li>
            Working on a VSCode extension, fullstack app, and ecommerce...
          </li>
          <li>
            by the way, this looks really ugly right now so pay no mind to it,
            still working on this site
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
