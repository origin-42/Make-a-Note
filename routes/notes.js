const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend, readAndDelete } = require('../helpers/fsUtils');

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
notes.delete('/:id', (req, res) => {

    const { id } = req.params;

    readAndDelete(id, './db/notes.json')

    res.status(201).json({ deleted: true })
})

module.exports = notes;