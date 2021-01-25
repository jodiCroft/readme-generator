import React from "react";

const Preview = ({ text }) => {
  return (
    <div className="PreviewArea">
      <h3 className="TemplateTitle">See preview here</h3>

      <div className="PreviewPage">
        <div className="PreviewOutput">{text}</div>
      </div>
    </div>
  );
};

export default Preview;
