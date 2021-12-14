import React, { useState, useEffect } from "react";
import Footer from "./Footer";

const Home = () => {
  const [cat, setCat] = useState([]);
  const [displayFooter, setDisplayFooter] = useState(false);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((response) => response.json())
      .then((data) => setCat(data));
  }, []);

  const showMore = (event) => {
    event.preventDefault();
    setDisplayFooter(!displayFooter);
  };

  const eachCat = cat.map((cat) => {
    return <img className="image" src={cat.url} alt={cat.id} key={cat.id} />;
  });

  return (
    <>
      <div>
        <h1>Welcome to my home page</h1>
        <p>
          My name is Sarah Pfohman, I am a current student at Flatiron School,
          based in NYC! I love cats, true crime, and learning to code!
        </p>
        {eachCat}
        <br />
      </div>
      <footer>
        <button className="button" onClick={showMore}>
          Show more
        </button>
        {displayFooter ? <Footer /> : null}
      </footer>
    </>
  );
};
export default Home;
