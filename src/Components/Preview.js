import React from "react";
import ReactMarkdown from "react-markdown";

const Preview = ({ text }) => {
  return (
    <div className="PreviewArea">
      <h3 className="TemplateTitle">See preview here</h3>

      <div className="PreviewPage">
        <div className="PreviewOutput">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Preview;
