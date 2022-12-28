import { NoteImg } from "./note-img.jsx";
import { NotePreview } from "./note-preview";
import { NoteTodos } from "./note-todos";
import { NoteTxt } from "./note-txt";

export function DynamicNote({ type, info }) {
    
  switch (type) {
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
        return <NotePreview info={info}/>;
      break;

    default:
      break;
  }
}
