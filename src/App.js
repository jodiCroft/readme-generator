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
  
  \`\`\` bash
  pip install foobar
  \`\`\`
  
  ## Usage
  
  \`\`\` python
  import foobar
  
  foobar.pluralize('word') # returns 'words'
  foobar.pluralize('goose') # returns 'geese'
  foobar.singularize('phenomena') # returns 'phenomenon'
  \`\`\`
  
  ## Contributing
  Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
  
  Please make sure to update tests as appropriate.
  
  ## License
  [MIT](https://choosealicense.com/licenses/mit/)
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
      <div className="Footer">
        When you're happy with the preview, copy the markdown text (on the left)
        to paste into your text editor or your project repo!
      </div>
    </div>
  );
}

export default App;
