import React from "react";
import ReactMarkdown from "react-markdown";

const Preview = ({ text }) => {
  console.log(text);
  return (
    <div className="TemplateArea">
      <div className="PreviewWrapper">
        <div className="TitleWrapper">
          <h3 className="PreviewTitle">See preview here</h3>
        </div>
        <div className="PreviewOutput">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Preview;
