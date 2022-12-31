import { utilService } from "../../../services/util.service.js";
import { storageService } from "../../../services/async-storage.service.js";

const NOTES_KEY = "notes";

_createNotes();

export const noteService = {
  query,
  save,
  get,
  remove,
  getEmptyNote,
  getDefaultFilter
};

function query(filterBy = getDefaultFilter()) {
  return storageService.query(NOTES_KEY).then((notes) => {
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        notes = notes.filter(note => regex.test(note.info.title) || regex.test(note.info.txt))
    }
    if (filterBy.type) {
        notes = notes.filter(note => note.type === filterBy.type)
    }
    return notes;
  });
}


function save(note) {
  if (note.id) {
    return storageService.put(NOTES_KEY, note);
  } else {
    return storageService.post(NOTES_KEY, note);
  }
}

function get(noteId) {
  return storageService.get(NOTES_KEY, noteId);
}

function remove(noteId) {
  return storageService.remove(NOTES_KEY, noteId);
}

function getDefaultFilter() {
    return {type:'', title:'', txt:''}
}

function getEmptyNote() {
  return {
    id: "",
    createdAt: "",
    type: "",
    isPinned: false,
    info: { txt: "", title: "" },
    style:{backgroundColor:""}
  };
}

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTES_KEY);
  if (!notes || !notes.length) {
    notes = [
      {
        id: "n101",
        createdAt: Date.now(),
        type: "note-txt",
        isPinned: false,
        style: { backgroundColor: "#00d" },
        info: { txt: "Fullstack Me Baby!" },
      },
      {
        id: "n102",
        type: "note-img",
        createdAt: Date.now(),
        isPinned: false,
        info: {
          url: "https://media.tenor.com/bnkVuyHgJrYAAAAC/question-mark-question-mark-meme-guy.gif",
          title: "Bobi and Me",
        },
        style: { backgroundColor: "#00d" },
      },
      {
        id: "n103",
        type: "note-todos",
        isPinned: false,
        createdAt: Date.now(),
        style: { backgroundColor: "#00d" },
        info: {
          title: "Get my stuff together",
          todos: [
            { txt: "Driving liscence", doneAt: null },
            { txt: "Coding power", doneAt: 187111111 },
          ],
        },
      },
      {
        id: "n104",
        type: "note-video",
        isPinned: false,
        createdAt: Date.now(),
        style: { backgroundColor: "#00d" },
        info: {
          title: "my video",
          url: "https://www.youtube.com/embed/tgbNymZ7vqY",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-img",
        isPinned: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        info: {
          label: "",
          url: "https://www.deadcoderising.com/content/images/2018/04/impressive.gif",
        },
        style: {
          backgroundColor: '#fff48f',
          color: "black",
          fontSize: 15,
          fontFamily: "Impact",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-img",
        isPinned: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        info: {
          label: "",
          url: "https://b1694534.smushcdn.com/1694534/wp-content/uploads/2021/06/0_fQTD4DjK71YMUtIS.gif?lossy=1&strip=1&webp=1",
        },
        style: {
          backgroundColor: '#fff48f',
          color: "black",
          fontSize: 15,
          fontFamily: "Impact",
        },
      },
    ];
    utilService.saveToStorage(NOTES_KEY, notes);
  }
}
