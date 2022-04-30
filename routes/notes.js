const notes = require('express').Router();

const {
    renderHandler,
    addNoteHandler,
    removeNoteHandler
} = require('../constrollers/notes');

notes.route('/')
    .get(renderHandler)
    .post(addNoteHandler)
notes.route('/:id')
    .delete(removeNoteHandler)

module.exports = notes;