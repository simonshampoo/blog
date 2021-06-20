import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Bloglist from "./components/Bloglist";
import Navigation from "./components/Navigation.js";
import Projects from "./components/Projects"
import Homepage from "./Homepage.js"

const App = () => {
  return (
    <HashRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Homepage />} />
          <Route path="/blogs" exact component={() => <Bloglist />} />
          <Route path="/projects" exact component={() => <Projects />} />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
