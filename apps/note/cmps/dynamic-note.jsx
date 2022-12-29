const { useState } = React;

import { NoteImg } from "./note-img.jsx";
import { NoteTodos } from "./note-todos.jsx";
import { NoteTxt } from "./note-txt.jsx";
import { NoteVideo } from "./note-video.jsx";

export function DynamicNote({ type, info }) {

    const [cmpType, setCmpType] = useState(type)

  switch (cmpType) {
    case "note-img":
    return <NoteImg info={info}/>;
      break;
    case "note-todos":
        return <NoteTodos info={info}/>;
      break;
    case "note-txt":
        return <NoteTxt info={info}/>;
      break;
    case "note-video":
        return <NoteVideo info={info}/>;
      break;

    default:
      break;
  }
}
