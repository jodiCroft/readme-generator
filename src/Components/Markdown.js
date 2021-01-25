import React, { useState } from "react";

const Markdown = ({ text, handleChange }) => {
  return (
    <div className="MarkdownArea">
      <h3 className="TemplateTitle">Type markdown text here</h3>

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
