import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Markdown from "./Components/Markdown";
import Preview from "./Components/Preview";

function App() {
  const [text, setText] = useState(`# One Liner Project

  A simple Node Module which can provide one line joke randomly or from specific tag. This module contains more than 2200 one line jokes.
  
  ## Installation
  
  Use the package manager [npm](https://docs.npmjs.com/) to install and save.
  
  \`\`\` bash
  npm install one-liner-joke --save
  \`\`\`
  
  ## Usage
  
  \`\`\` var oneLinerJoke = require('one-liner-joke');

  /*
  The variable getRandomJoke will contain a random joke with a format:
  {"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
  */
  var getRandomJoke = oneLinerJoke.getRandomJoke();
  console.log(getRandomJoke)
  
  /*
  One can add exclusion filter for the jokes tags
  default is ['racist', 'dirty', 'sex']
  */
  var getRandomJoke = oneLinerJoke.getRandomJoke({
      'exclude_tags': ['dirty', 'racist', 'marriage']
    });
  console.log(getRandomJoke)
  
  
  /*
  The variable getRandomJoke will contain a random joke with a tag and with a format:
  {"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
  */
  
  var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('stupid');
  console.log(getRandomJokeWithTag)
  
  /*
  One can add exclusion filter for the jokes tags
  default is ['racist', 'dirty', 'sex']
  */
  var getRandomJoke = oneLinerJoke.getRandomJokeWithTag('stupid', {
    'exclude_tags': ['dirty', 'racist', 'marriage']
  });
  console.log(getRandomJoke)
  \`\`\`
  
  
  ## Repository
  [Github](https://github.com/faiyaz26/one-liner-joke)
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
