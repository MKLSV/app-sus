const { useState } = React;

import { noteService } from "../services/note.service.js";

export function ColorPicker({ color, setColor, note, setIsPickerOpen }) {
  const colors = [
    "#F28B82",
    "#FBBC05",
    "#FFF475",
    "#CCFF90",
    "#A7FFEB",
    "#CBF0F8",
    "#AECBFA",
    "#D7AEFB",
    "#FDCFE8",
    "#E6C9A8",
    "#E8EAED",
  ];

  function handleColorPick(color) {
    setColor(color)
    note.style.backgroundColor = color
    noteService.save(note).then(note => {
        console.log(note);
    })
    setIsPickerOpen(false)
  }

  return (
    <div className="color-picker">
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => handleColorPick(color)}
        />
      ))}
    </div>
  );
}
