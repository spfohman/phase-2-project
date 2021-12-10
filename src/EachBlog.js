import React from "react";

const EachBlog = ({ post, updateLikes }) => {
  return (
    <div className="blogCard">
      <h3>{post.title}</h3>
      <h5>Posted: {post.date}</h5>
      <a className="bloglinks" href={post.link}>
        {post.title}
      </a>
      <br />
      <button className="likeButton" onClick={updateLikes}>
        Likes: {post.likes}
      </button>
    </div>
  );
};
export default EachBlog;
