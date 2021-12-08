import React, { useState } from "react";

const Context = React.createContext();
const Provider = (props) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("url")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };
  return (
    <Context.Provider value={{ blogs: blogs, addBlogs: addBlogs }}>
      {props.children}
    </Context.Provider>
  );
};
const Consumer = Context.Consumer;
export { Provider, Consumer };
