


export function NoteImg({info}) {
    console.log('hello from from note img');
    return (<div>
        <img className="note-img" src={`${info.url}`} alt="note-img" />
        {info.title && <h2 contentEditable={true}>{info.title}</h2>}
        {info.txt && <p contentEditable={true}>{info.txt}</p>}
        
    </div>)

}