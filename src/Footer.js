import React from "react";

const Footer = () => {
  return (
    <div>
      <h5>Contact Info: </h5>

      <a
        className="bloglinks"
        target="_blank"
        rel="noreferrer"
        href="mailto:spfohman@email.essex.edu"
      >
        Email: Sarah Pfohman
      </a>
      <br />
      <a
        className="bloglinks"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/spfohman"
      >
        Github
      </a>
      <br />
      <a
        className="bloglinks"
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/sarah-pfohman-998a8246/"
      >
        LinkedIn
      </a>
    </div>
  );
};
export default Footer;
