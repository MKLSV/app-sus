import { utilService } from "../../../services/util.service.js";
import { storageService } from "../../../services/async-storage.service.js";

var notesDB = []
const NOTES_KEY = 'notes'

export default {
    addNote
}

function addNote({ type, data }) {
    console.log('add note')
    console.log(type)
    var newNote = _createNewNoteObj(type)
    if (type === 'txt') newNote.txt = data
    if (type === 'img') newNote.imgSrc = data
    if (type === 'video') newNote.videoSrc = data
    if (type === 'todo') newNote = _makeTodos(newNote, data)
    notesDB.push(newNote)
    utilService.saveToStorage(NOTES_KEY, notesDB)
    return Promise.resolve()
}

function _createNewNoteObj(type) {
    return {
        type: type,
        id: utilService.makeId(),
        date: new Date(),
        isPinned: false,
    }
}