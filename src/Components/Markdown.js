import React, { useState } from "react";

const Markdown = ({ text, handleChange }) => {
  return (
    <div className="TemplateArea">
      <div className="TitleWrapper">
        <h3 className="MarkdownTitle">Type markdown text here</h3>
      </div>
      <div className="MarkdownPage">
        <textarea
          className="MarkdownInput"
          value={text}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
    </div>
  );
};

export default Markdown;
