import React, { useState, useEffect } from "react";

const Home = () => {
  const [cat, setCat] = useState([]);
  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => setCat(data));
  }, []);

  const eachCat = cat.map((cat) => {
    return <img className="image" src={cat.url} alt={cat.id} key={cat.id} />;
  });

  return (
    <div>
      <h1>Welcome to my home page</h1>
      <p>
        My name is Sarah Pfohman, I am a current student at Flatiron School,
        based in NYC! I love cats, true crime, and learning to code!
      </p>
      {eachCat}
    </div>
  );
};
export default Home;
