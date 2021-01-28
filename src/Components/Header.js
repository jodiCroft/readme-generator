import React from "react";

const Header = () => {
  return (
    <div className="HeaderWrapper">
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
