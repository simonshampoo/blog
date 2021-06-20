import React from "react";
import "./Bloglist.css";
import { Switch, Route, Link, withRouter } from "react-router-dom";
import TestBlog from "./blogs/posts/TestBlog.js";


const Bloglist = () => {
  console.log("Bloglist is rendering"); 
  return (
    <div className="parent">
      <div className="posts">
      <h1>Blogs: </h1>
          <Link to={"/blogs/data"}>
            Data Structures and Algorithms Primer
          </Link>
    </div>
      <Switch>
        <Route path={"/blogs/data"}>
          <TestBlog />
        </Route>
      </Switch>
    </div>
  );
};
export default withRouter(Bloglist);
