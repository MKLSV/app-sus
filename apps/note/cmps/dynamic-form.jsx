import { ImgForm } from "./img-form.jsx";
import { TextForm } from "./text-form.jsx";
import { TodosForm } from "./todos-form.jsx";
import { VideoForm } from "./video-form.jsx";


export function DynamicForm({noteToAddType, onSaveNote, notes, setNotes, handleChange, noteToAdd }) {

    
    switch (noteToAddType) {
        case "note-img":
        return <ImgForm noteToAddType={noteToAddType} onSaveNote={onSaveNote} handleChange={handleChange} notes={notes} setNotes={setNotes} noteToAdd={noteToAdd}/>;
          break;
        case "note-todos":
            return <TodosForm noteToAddType={noteToAddType} onSaveNote={onSaveNote} handleChange={handleChange} notes={notes} setNotes={setNotes} noteToAdd={noteToAdd}/>;
          break;
        case "note-txt":
            return <TextForm noteToAddType={noteToAddType} onSaveNote={onSaveNote} handleChange={handleChange} notes={notes} setNotes={setNotes} noteToAdd={noteToAdd}/>;
          break;
        case "note-video":
            return <VideoForm noteToAddType={noteToAddType} onSaveNote={onSaveNote} handleChange={handleChange} notes={notes} setNotes={setNotes} noteToAdd={noteToAdd}/>;
          break;
    
        default:
          break;
      }    
}