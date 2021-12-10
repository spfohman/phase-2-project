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
    const name = e.target.name;
    const value = e.target.value;
    setBlog((values) => ({ ...values, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(blog.title);
    // const newBlog = {
    //   title: blog.title,
    //   link: blog.link,
    //   date: blog.date,
    //   likes: 0,
    // };
    fetch("http://localhost:3001/blogposts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify({ blog }),
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
          value={blog.title}
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Date"
          name="date"
          value={blog.date}
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="url"
          placeholder="Web Link"
          name="link"
          value={blog.link}
          onChange={handleChange}
        ></input>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};
export default BlogUpload;
