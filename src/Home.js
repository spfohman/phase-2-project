import React, { useState, useEffect } from "react";

const Home = () => {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => setCat(data));
  }, []);
  console.log(cat);
  const eachCat = cat.map((cat) => {
    return <img className="image" src={cat.url} alt={cat.id} key={cat.id} />;
  });
  return (
    <div>
      <h1>Welcome to my home page</h1>
      {eachCat}
    </div>
  );
};
export default Home;
