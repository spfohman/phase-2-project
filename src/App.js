import "./App.css";
import Home from "./Home";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import BlogPosts from "./BlogPosts";
import React, { useState, useEffect } from "react";
import GitProjects from "./GitProjects";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/blogposts")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        setProjects(data);
      });
  }, []);
  return (
    <div className="App">
      <NavBar />
      <br />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/blogposts">
        <BlogPosts blogs={blogs} />
      </Route>
      <Route path="/gitprojects">
        <GitProjects projects={projects} />
      </Route>
    </div>
  );
}

export default App;
