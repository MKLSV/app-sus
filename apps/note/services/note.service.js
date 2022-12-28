import { utilService } from "../../../services/util.service.js";
import { storageService } from "../../../services/async-storage.service.js";

const NOTES_KEY = "notes";

_createNotes();

export const noteService = {
  query,
  save,
  get,
  remove,
};

// function addNote({ type, data }) {
//   console.log("add note");
//   console.log(type);
//   var newNote = _createNewNoteObj(type);
//   if (type === "txt") newNote.txt = data;
//   if (type === "img") newNote.imgSrc = data;
//   if (type === "video") newNote.videoSrc = data;
//   if (type === "todo") newNote = _makeTodos(newNote, data);

//   utilService.saveToStorage(NOTES_KEY, newNote);
//   return Promise.resolve();
// }

// function _createNewNoteObj(type) {
//   return {
//     type: type,
//     id: utilService.makeId(),
//     date: new Date(),
//     isPinned: false,
//   };
// }

// function getNotes() {
//   var notes = utilService.loadFromStorage(NOTES_KEY);
//   if (!notes || !notes.length) {
//     notes = [
//       addNote({
//         type: "video",
//         data: "https://www.youtube.com/watch?v=izTMmZ9WYlE",
//       }),
//       addNote({
//         type: "img",
//         data: "https://qph.fs.quoracdn.net/main-qimg-c00c5665edabad203972611b5cee5e48.webp",
//       }),
//       addNote({ type: "txt", data: "this is my note, i am proud of it!" }),
//       addNote({
//         type: "txt",
//         data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
//       }),
//       addNote({
//         type: "img",
//         data: "https://pbs.twimg.com/profile_images/944816493295845376/43VDrZJk_400x400.jpg",
//       }),
//       addNote({ type: "todo", data: "gym, laundry, study, repeat" }),
//       addNote({
//         type: "txt",
//         data: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem",
//       }),
//       addNote({
//         type: "img",
//         data: "https://i.pinimg.com/originals/b7/e3/4c/b7e34ce24dce66c2b0f6bcd7a4d039ff.jpg",
//       }),
//       addNote({ type: "todo", data: "Going to sleep, eat" }),
//       addNote({
//         type: "img",
//         data: "https://images1-ynet-prod.azureedge.net/PicServer4/2016/01/27/6781132/67811170100099640360no.jpg",
//       }),
//     ];
//     utilService.saveToStorage(NOTES_KEY, notes);
//   }
// }

// function _makeTodos(newNote, data) {
//   var todos = data.split(",");
//   newNote.todos = todos.map((todo) => {
//     return {
//       txt: todo,
//       isDone: false,
//     };
//   });
//   return newNote;
// }

function query() {
  return storageService.query(NOTES_KEY).then((notes) => {
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

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTES_KEY);
  if (!notes || !notes.length) {
    notes = [
      {
        id: "n101",
        createdAt: 1112222,
        type: "note-txt",
        isPinned: true,
        style: { backgroundColor: "#00d" },
        info: { txt: "Fullstack Me Baby!" },
      },
      {
        id: "n102",
        type: "note-img",
        isPinned: false,
        info: { url: "https://thumbs.dreamstime.com/b/small-river-forest-mountain-under-shadows-31344529.jpg", title: "Bobi and Me" },
        style: { backgroundColor: "#00d" },
      },
      {
        id: "n103",
        type: "note-todos",
        isPinned: false,
        info: {
          title: "Get my stuff together",
          todos: [
            { txt: "Driving liscence", doneAt: null },
            { txt: "Coding power", doneAt: 187111111 },
          ],
        },
      },
    ];
    utilService.saveToStorage(NOTES_KEY, notes);
  }
}

// function _createNotes() {
//     let notes = utilService.loadFromStorage(NOTES_KEY);
//     if (!notes || !notes.length) {
//       notes = [
//         {
//           id: utilService.makeId(),
//           type: "note-txt",
//           title: "hello from note app",
//           txt: "REACT JS RULES!"
//         },
//         {
//           id: utilService.makeId(),
//           type: "note-img",
//           title: "hello from note app",
//           txt: "PASHUTI!"
//         },
//         {
//           id: utilService.makeId(),
//           type: "note-todos",
//           title: "hello from note app",
//           txt: "LO EVANTI ET A MAALAH AZE!"

//         },
//       ];
//       utilService.saveToStorage(NOTES_KEY, notes)
//     }
//   }
