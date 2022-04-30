const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

notes.get('/', (req, res) => {
    readFromFile('./db/notes.json').then((data) => res.json(JSON.parse(data)));
});
notes.post('/', (req, res) => {
    const { title, text } = req.body;

    const payload = {
        id: uuidv4(),
        title: title,
        text: text
    }

    readAndAppend(payload, './db/notes.json');

    res.status(201).json(payload);
});

module.exports = notes;