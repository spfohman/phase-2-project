import "./App.css";
import Home from "./Home";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import BlogPosts from "./BlogPosts";
import React, { useState, useEffect } from "react";
import BlogUpload from "./BlogUpload";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/blogposts")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  function addBlogs(newBlog) {
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
  }

  function handleUpdateBlog(updateLikes) {
    const updatedLikes = blogs.map((blog) => {
      return blog.id === updateLikes.id ? updateLikes : blog;
    });
    setBlogs(updatedLikes);
  }
  return (
    <div className="App">
      <NavBar />
      <br />
      <Route path="/blogposts">
        <BlogPosts blogs={blogs} handleUpdateBlog={handleUpdateBlog} />
      </Route>
      <Route path="/blogupload">
        <BlogUpload addBlogs={addBlogs} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
