import React from "react";

const EachBlog = ({ post, handleUpdateBlog }) => {
  function updateLikes() {
    const addLike = {
      likes: post.likes + 1,
    };

    fetch(`https://phase-2-blogpost-app.herokuapp.com/blogposts/${post.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addLike),
    })
      .then((response) => response.json())
      .then(handleUpdateBlog);
  }
  return (
    <div className="blogCard">
      <h3>{post.title}</h3>
      <h5>Posted: {post.date}</h5>
      <a
        className="bloglinks"
        target="_blank"
        rel="noreferrer"
        href={post.link}
      >
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
