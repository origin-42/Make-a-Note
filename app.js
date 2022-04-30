const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const api = require('./routes/index.js');

// Middlemen

// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json());

// get APIs
app.use('/api', api);

// Set static port
app.use(express.static('public'));

// Routes
// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for Notes Page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Get route to watch all end points / return to main page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})