const express = require('express');

// Import modular routers for /notes
const notesRouter = require('./notes');

const app = express();

// add middleware
app.use('/notes', notesRouter);

module.exports = app;