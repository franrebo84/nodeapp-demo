'use strict';

const express = require('express');
const cowsay = require("cowsay");



// Constants
const PORT = 8080;

// App
const app = express();

function get_cows(error, cow_names) {
    if (error) {
        console.log(error)
    }
    else if (cow_names) {
        console.log(`Number of cows available: ${cow_names.length}`);
    }
}
cowsay.list(get_cows);



app.get("/", function (req, res) {
  let text;
  text = "Hi Awesome People!";
  const responseText = `
  <html> 
  <head>
  <style>
  body{
  background-color: #000000;
  }
  #container {
  background-color: #000000;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  max-height: 1200px;
  display: flex;
 justify-content: center;
  margin: auto;
  width: 60%;
  padding: 10px;
  }

  #content {
  color: #ffffff;
  font-size: 26px;
  font-family: monospace;
  white-space: pre-wrap;
  justify-content: center;
}
  </style>
  </head>
    <body>
    <div id="container">
     <div id="content">
   ${cowsay.say( { text: text ,
                f: 'ghostbusters' })}
    </body>
     </div>
    </div>
  </html>
  `;

  res.send(responseText);
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
