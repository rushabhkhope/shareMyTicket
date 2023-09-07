// Create a file called `server.js`
const express = require('express');

const app = express();

// Set EJS as the templating engine
// app.set('view engine', 'ejs');

// Create a view file called `index.ejs`
// Render the view file
app.get('/first', (req, res) => {
  res.send('index file is rendering');
});

// Start the server
console.info( "server is running on port 3000")
app.listen(3000);