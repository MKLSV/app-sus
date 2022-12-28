export function NoteTodos({ info }) {
  return (
    <div className="note-todos">
        {info.title && <h1>{info.title}</h1>}
        {info.txt && <p>{info.txt}</p>}
      <ul>
        {info.todos.map((todo) => (
          <li>{todo.txt}</li>
        ))}
      </ul>
    </div>
  );
}
