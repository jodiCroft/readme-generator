import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Markdown from "./Components/Markdown";
import Preview from "./Components/Preview";

function App() {
  const [text, setText] = useState(`# dad-jokes

  > Everybody loves dad jokes... right?
  
  ![dadjoke](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1zVXeNGtMirZcDSAD84gq_DDFfPH-Zw7n2Q&usqp=CAU)
  
  The jokes list is just a [JSON file](jokes.json) and can be used wherever. PRs welcome if you've got a good dad joke!
  
  ## Install
  
  \`\`\`
  $ npm install --save @mikemcbride/dad-jokes
  \`\`\`
  
  
  ## Usage
  
  \`\`\`js
  const dadJokes = require('dad-jokes');
  
  dadJokes.random();
  //=> 'The shovel was a ground-breaking invention.'
  \`\`\`
  
  
  ## API
  
  ### .all
  
  Type: \`\`\` array \`\`\`
  
  All the dad jokes we have.
  
  ### .random()
  
  Type: \`\`\` function \`\`\`
  
  Random dad joke from the list.
  
  
  ## CLI
  
  \`\`\`
  $ npm install --global @mikemcbride/dad-jokes
  \`\`\`
  
  \`\`\`
  $ dad-jokes --help
  
    Examples
      $ dad-jokes
      The shovel was a ground-breaking invention.
  
      $ dad-jokes --all
      Did you hear about the restaurant on the moon? Great food, no atmosphere.
      What do you call a fake noodle? An impasta.
      How many apples grow on a tree? All of them.
      ...
  
    Options
      --all   Get all jokes instead of a random joke
  \`\`\`
  
  ## License
  
  MIT © [Mike McBride](https://mikemcbride.dev)
  
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
