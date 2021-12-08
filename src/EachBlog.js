import React from "react";

const EachBlog = ({ post, updateLikes }) => {
  return (
    <div className="blogCard">
      <h3>{post.title}</h3>
      <h5>Posted: {post.date}</h5>
      <a href={post.link}>{post.title}</a>
      <br />
      <button onClick={updateLikes}>Likes: {post.likes}</button>
    </div>
  );
};
export default EachBlog;
