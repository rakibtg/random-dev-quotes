const { createServer } = require("node:http");

const jokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs!",
  "Why don't programmers like nature? It has too many bugs.",
  "How do you comfort a JavaScript bug? You console it.",
  "Why was the JavaScript developer sad? Because he didn't Node how to Express himself.",
  "Why do Java developers wear glasses? Because they don't C#.",
  "What's a programmer's favorite hangout place? Foo Bar.",
  "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
  "Why do programmers hate spiders? They can't debug webs.",
  "What do you call a programmer from Finland? Nerdic.",
  "Whats a programmers favorite music? Loops.",
  "How do you explain the movie Inception to a programmer? Its a stack overflow.",
  "Why was the developer bankrupt? He used up all his cache.",
  "Why do Python programmers prefer dark clothes? Because its easier to hide the snakes.",
  "What do you call an algorithm that never ends? A wife loop.",
  "Why couldn't the programmer dance? He had no algo-rhythm.",
  "What's a bug's favorite sport? Squash!",
  "Whats a developers favorite coffee? Java.",
  "Why was the database admin late to work? He got lost in a join.",
  "How do you make a developer sad? Delete his backups.",
  "Why don't programmers like to pass the salt? They get confused about passing by value or by reference.",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "If you see a crime at an Apple Store, does that make you an iWitness?",
];

function getRandomJoke() {
  const index = Math.floor(Math.random() * jokes.length);
  return jokes[index];
}

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

server.listen(3000, () => {
  console.log("Listening on 127.0.0.1:3000");
});
