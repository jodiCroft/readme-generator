import React from "react";

const Header = () => {
  return (
    <div className="HeaderWrapper">
      <div className="NavWrapper">
        <a
          className="GithubLink"
          href="https://github.com/jodiCroft/readme-generator"
          target="_blank"
        >
          <img
            src="https://i.imgur.com/CD05ted.png"
            className="Logo"
            alt="create-readme-logo"
            height="12%"
            width="12%"
          />
        </a>
        <a
          className="LinkToCheat"
          href="https://www.markdownguide.org/cheat-sheet/"
          target="_blank"
        >
          Markdown Cheat Sheet
        </a>
      </div>

      <div className="Header">
        <h1 className="SiteTitle">README Generator</h1>
        <h5 className="Subheader">
          Create a README.md for your project using this simple template. See
          the preview of the markdown as you edit!
        </h5>
        {/* <button className="GetStartedButton">Get Started!</button> */}
      </div>
    </div>
  );
};

export default Header;
