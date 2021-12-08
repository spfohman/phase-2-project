import "./App.css";
import Home from "./Home";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import BlogPosts from "./BlogPosts";
import React from "react";
import GitProjects from "./GitProjects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/blogposts">
        <BlogPosts />
      </Route>
      <Route path="/gitprojects">
        <GitProjects />
      </Route>
    </div>
  );
}

export default App;
