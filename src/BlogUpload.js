import React, { useState } from "react";

const BlogUpload = () => {
  const [blog, setBlog] = useState({
    title: "",
    link: "",
    date: "",
    likes: 0,
  });
  function handleChange(e) {
    console.log(e.target.value);
    setBlog({
      ...blog,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const newBlog = {
      title: blog.title,
      link: blog.link,
      date: blog.date,
      likes: 0,
    };
    fetch("http://localhost:3001/blogposts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify(newBlog),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBlog(data);
        setBlog({
          title: "",
          link: "",
          date: "",
          likes: 0,
        });
      });
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h5>Upload a new blog post here: </h5>
        <input
          type="text"
          placeholder="Title"
          name="title"
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Date"
          name="date"
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="url"
          placeholder="Web Link"
          name="link"
          onChange={handleChange}
        ></input>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default BlogUpload;
