const {useState} = React

export function NoteTodos({ info }) {
  const [data, setData] = useState('')
  

  return (
    <div >
        {info.title && <h1>{info.title}</h1>}
        {info.txt && <p>{info.txt}</p>}
      <ul >
        {info.todos.map((todo, idx) => (
          <li key={idx} >{todo.txt}</li>
        ))}
      </ul>
    </div>
  );
}


// <div
//   className={`note ${note.type}`}
//   style={{
//     backgroundColor: note.style.backgroundColor,
//     fontFamily: note.style.fontFamily,
//   }}
// >
//   <i className="fa fa-list-ul"></i>
//   <div style={{ fontSize: note.style.fontSize + "px" }}>
//     {note.info.label && <h5 className="note-label">{note.info.label}</h5>}
//     {note.info.valxue.map((todo, idx) => {
//       return (
//         <p key={id}>
//           <li
//             onClick={() => {
//               eventBusService.emit("markTodo", { note, idx });
//             }}
//             className={todo.isDone ? "mark" : ""}
//           >
//             {todo.txt}
//           </li>{" "}
//           {todo.doneAt && (
//             <span>Done At : {new Date(todo.doneAt).toLocaleTimeString()}</span>
//           )}
//         </p>
//       );
//     })}{" "}
//   </div>

//   <OptionsBar note={note} onEdit={onEdit} />
// </div>;

