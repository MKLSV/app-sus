

export function NoteTxt({info}) {

    return <div className="note-txt">
        {info.title && <h1>{info.title}</h1>}
        <p>{info.txt}</p>
        
    </div>

}