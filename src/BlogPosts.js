import React, { useState } from "react";
import EachBlog from "./EachBlog";

const BlogPosts = ({ blogs }) => {
  const [likes, setLikes] = useState(0);

  function updateLikes() {
    const addLike = {
      likes: likes + 1,
    };

    fetch(`http://localhost:3001/blogposts/${blogs.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ addLike }),
    })
      .then((response) => response.json())
      .then(setLikes);
    console.log(`clicked ${blogs.id}`);
  }

  const blogPosts = blogs.map((post) => (
    <EachBlog key={post.title} post={post} updateLikes={updateLikes} />
  ));

  return (
    <div>
      <h4>
        Here is a list of my most recent blog posts. Feel free to check them
        out, like, or leave a comment!
      </h4>
      {blogPosts}
      <br />
      <hr />
    </div>
  );
};
export default BlogPosts;
