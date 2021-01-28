import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const Markdown = ({ text, handleChange }) => {
  return (
    <div className="TemplateArea">
      <div className="TitleWrapper">
        <h3 className="MarkdownTitle">Type markdown text here</h3>
      </div>
      <TextareaAutosize
        className="MarkdownInput"
        value={text}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Markdown;
