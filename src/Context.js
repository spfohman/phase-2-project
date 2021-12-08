// import React, { createContext, useEffect, useState } from "react";

// const Context = createContext();
// const Provider = () => {
//   const [blogs, setBlogs] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:3001/blogposts")
//       .then((response) => response.json())
//       .then((data) => {
//         setBlogs(data);
//       });
//   }, []);
//   console.log(blogs);
//   //   const addBlog = (blog) => {
//   //     setBlogs([...blogs, blog]);
//   //   };
//   return <Context.Provider value={{ blogs }}> blogs={blogs}</Context.Provider>;
// };
// const Consumer = Context.Consumer;
// export { Provider, Consumer };
