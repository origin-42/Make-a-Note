const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile } = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});

module.exports = notes;