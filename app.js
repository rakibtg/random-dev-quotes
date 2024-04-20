const { createServer } = require("node:http");
const { getRandomJoke } = require("./utils/getJokes.js");

const domString = (quote) => `
<!DOCTYPE html>
<html>
  <head>
    <title>Random Quotes</title>
  </head>
  <style>
    html, body {
      margin: 0;
      font-family: sans-serif;
    }
    main {
      color: #000;
      padding-left: 30px;
      padding-right: 30px;
      max-width: 800px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-size: 2rem;
      line-height: 1.5;
    }
  </style>
  <body>
    <main>
      <p>${quote}</p>
    </main>
  </body>
</html>
`;

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(domString(getRandomJoke()));
});

server.listen(3070, () => {
  console.log("Listening on 127.0.0.1:3070");
});
