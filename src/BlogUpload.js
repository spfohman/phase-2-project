import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const BlogUpload = ({ addBlogs }) => {
  let history = useHistory();
  const [newBlog, setNewBlog] = useState({
    title: "",
    link: "",
    date: "",
    likes: 0,
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewBlog({ ...newBlog, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const addnewBlog = {
      title: newBlog.title,
      link: newBlog.link,
      date: newBlog.date,
      likes: 0,
    };

    fetch("http://localhost:3000/blogposts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addnewBlog),
    })
      .then((response) => response.json())
      .then(addBlogs);

    setNewBlog({
      title: "",
      link: "",
      date: "",
      likes: 0,
    });
    history.push("/blogposts");
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h5>Upload a new blog post here: </h5>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={newBlog.title}
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="text"
          placeholder="Date"
          name="date"
          value={newBlog.date}
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="url"
          placeholder="Web Link"
          name="link"
          value={newBlog.link}
          onChange={handleChange}
        ></input>
        <br />
        <input className="button" type="submit" />
      </form>
    </div>
  );
};
export default BlogUpload;
