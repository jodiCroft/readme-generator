import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Markdown from "./Components/Markdown";
import Preview from "./Components/Preview";

function App() {
  const [text, setText] = useState(`# Foobar

  Foobar is a Python library for dealing with word pluralization.
  
  ## Installation
  
  Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.
  
  \`\`\`
  pip install foobar
  `);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <div className="TemplateContainer">
        <Markdown text={text} handleChange={handleChange} />
        <Preview text={text} />
      </div>
      <div>
        When you're happy with the preview, copy the markdown text (on the left)
        to paste into your text editor!
      </div>
    </div>
  );
}

export default App;
