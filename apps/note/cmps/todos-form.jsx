const { useState } = React;

export function TodosForm({
  noteToAddType,
  onSaveNote,
  notes,
  setNotes,
  handleChange,
  noteToAdd,
}) {
  const [todos, setTodos] = useState([]); // Initialize an empty array for the to-do items
  const [currentTodo, setCurrentTodo] = useState({title:"", text: "", key: "" }); // Initialize the current item with empty text and key values

  const handleInput = (e) => {
    setCurrentTodo({ text: e.target.value, key: Date.now() }); // Update the current item's text value when the input value changes
  };

  const addItem = (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
    const newTodo = currentTodo;
    if (newTodo.text !== "") {
      setTodos((prevItems) => [...prevItems, newTodo]); // Add the new item to the list
      setCurrentTodo({title:"", text: "", key: "" }); // Reset the current item
      console.log(items);
    }
  };

  const deleteItem = (key) => {
    setTodos((prevItems) => prevItems.filter((item) => item.key !== key)); // Remove the item with the specified key from the list
  };

  return (
    <div>
      <form onSubmit={addItem}>
        <input
          onChange={handleChange}
          value={noteToAdd.info.title}
          name="title"
          type="text"
          id="title"
          placeholder="Title"
        />
        <input
          type="text"
          placeholder="Enter to-do"
          value={currentTodo.text}
          onChange={handleInput}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item.key}>
            {item.text}
            <button onClick={() => deleteItem(item.key)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
