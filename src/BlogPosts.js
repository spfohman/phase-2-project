import EachBlog from "./EachBlog";

const BlogPosts = ({ blogs, handleUpdateBlog }) => {
  const blogPosts = blogs.map((post) => (
    <EachBlog key={post.id} post={post} handleUpdateBlog={handleUpdateBlog} />
  ));

  return (
    <div>
      <h4>
        Here is a list of my most recent blog posts, please check them out!
      </h4>
      {blogPosts}
      <br />
    </div>
  );
};
export default BlogPosts;
