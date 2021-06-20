import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "./Navigation.css";

const Navigation = () => {
  const [toggleLinks, setToggleLinks] = useState(false);

  return (
    <div className="navbar">
      <div className="leftside">
        <div className="links" id={toggleLinks ? "hidden" : ""}>
          <div>
            <NavLink to={"/"}>simonshampoo.io</NavLink>

            <NavLink to={"/blogs"}>blogs</NavLink>

            <NavLink to={"/projects"}>projects</NavLink>
          </div>
        </div>
        <button
          onClick={() => {
            setToggleLinks(!toggleLinks);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="rightside"></div>
    </div>
  );
};

export default withRouter(Navigation);
