import React from "react";

const BlogUpload = () => {
  return (
    <div>
      <form className="form">
        <h5>Upload a new blog post here: </h5>
        <input type="text" placeholder="Title"></input>
        <br />
        <input type="text" placeholder="Date"></input>
        <br />
        <input type="url" placeholder="Web Link"></input>
        <br />
      </form>
    </div>
  );
};
export default BlogUpload;
