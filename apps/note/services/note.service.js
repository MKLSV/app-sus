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
  getDefaultFilter,
  cloneNote
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

function cloneNote(noteId) {
    let notes = utilService.loadFromStorage(NOTES_KEY);
    get(noteId).then(note => {
        let cloneNote = JSON.stringify(note)
        cloneNote = JSON.parse(cloneNote)
        cloneNote.id = utilService.makeId()
        notes.splice(1, 0, cloneNote)
        utilService.saveToStorage(NOTES_KEY, notes)
    })
}


function _createNotes() {
  let notes = utilService.loadFromStorage(NOTES_KEY);
  if (!notes || !notes.length) {
    notes = [
      {
        id: utilService.makeId(),
        createdAt: Date.now(),
        type: "note-txt",
        isPinned: false,
        style: { backgroundColor: "#F28B82" },
        info: { txt: "Fullstack Me Baby!" },
      },
      {
        id: utilService.makeId(),
        type: "note-img",
        createdAt: Date.now(),
        isPinned: false,
        info: {
          url: "https://media.tenor.com/bnkVuyHgJrYAAAAC/question-mark-question-mark-meme-guy.gif",
          title: "demo data sucks",
        },
        style: { backgroundColor: "#FBBC05" },
      },
      {
        id: utilService.makeId(),
        type: "note-todos",
        isPinned: false,
        createdAt: Date.now(),
        style: { backgroundColor: "#FFF475" },
        info: {
          title: "Get my stuff together",
          todos: [
            { txt: "snovim godam", doneAt: null },
            { txt: "Coding power", doneAt: 187111111 },
          ],
        },
      },
      {
        id: utilService.makeId(),
        type: "note-video",
        isPinned: false,
        createdAt: Date.now(),
        style: { backgroundColor: "#CCFF90" },
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
          backgroundColor: '#A7FFEB',
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
          backgroundColor: '#CBF0F8',
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
          url: "https://b1694534.smushcdn.com/1694534/wp-content/uploads/2021/06/12-1.png?lossy=1&strip=1&webp=1",
        },
        style: {
          backgroundColor: '#A7FFEB',
          color: "black",
          fontSize: 15,
          fontFamily: "Impact",
        },
      },
      {
        id: utilService.makeId(),
        type: "note-video",
        isPinned: false,
        createdAt: Date.now(),
        style: { backgroundColor: "#CCFF90" },
        info: {
          title: "camping",
          url: "https://www.youtube.com/embed/GWEO8_4eIh4",
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
          url: "https://cdn.britannica.com/06/171306-050-C88DD752/Aurora-borealis-peninsula-Snaefellsnes-Iceland-March-2013.jpg",
        },
        style: {
          backgroundColor: '#A7FFEB',
          color: "black",
          fontSize: 15,
          fontFamily: "Impact",
        },
      },
      {
        id: utilService.makeId(),
        createdAt: Date.now(),
        type: "note-txt",
        isPinned: false,
        style: { backgroundColor: "#F28B82" },
        info: { txt: "Spring 3 is over!!!!!!!" },
      },
      {
        id: utilService.makeId(),
        createdAt: Date.now(),
        type: "note-txt",
        isPinned: false,
        style: { backgroundColor: "#CCFF90" },
        info: { txt: "can get some sleepppppppp" },
      },
      {
        id: utilService.makeId(),
        type: "note-img",
        isPinned: false,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        info: {
          label: "",
          url: "https://i.pinimg.com/originals/29/bd/26/29bd261d201e956588ee777d37d26800.gif",
        },
        style: {
          backgroundColor: '#A7FFEB',
          color: "black",
          fontSize: 15,
          fontFamily: "Impact",
        },
      }
    ];
    utilService.saveToStorage(NOTES_KEY, notes);
  }
}
