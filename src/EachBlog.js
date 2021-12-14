import React from "react";

const EachBlog = ({ post, handleUpdateBlog }) => {
  function updateLikes() {
    const addLike = {
      likes: post.likes + 1,
    };

    fetch(`http://localhost:3000/blogposts/${post.id}`, {
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
