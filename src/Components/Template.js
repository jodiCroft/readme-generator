import React from "react";
import Markdown from "../Components/Markdown";
import Preview from "../Components/Preview";

const Template = () => {
  return (
    <div className="TemplateContainer">
      <Markdown />
      <Preview />
      <div>
        When you're happy with the preview, copy the markdown text (on the left)
        to paste into your text editor!
      </div>
    </div>
  );
};

export default Template;
