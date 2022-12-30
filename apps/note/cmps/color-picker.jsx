const { useState } = React;

export function ColorPicker({ color, setColor }) {
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

  

  return (
    <div className="color-picker">
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => setColor(color)}
        />
      ))}
    </div>
  );
}
