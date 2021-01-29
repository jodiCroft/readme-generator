import React from "react";
import ReactMarkdown from "react-markdown";

const Preview = ({ text }) => {
  return (
    <div className="TemplateArea">
      <div className="PreviewWrapper">
        <div className="TitleWrapper">
          <h3 className="PreviewTitle">See preview here</h3>
        </div>
        <div className="PreviewOutput">
          <ReactMarkdown className="Code">{text}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Preview;
