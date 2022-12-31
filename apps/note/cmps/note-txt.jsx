



export function NoteTxt({info}) {

    return <div className="note-txt">
        {info.title && <h1 contentEditable={true}>{info.title}</h1>}
        <p contentEditable={true}>{info.txt}</p>
        
    </div>

}