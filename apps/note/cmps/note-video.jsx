export function NoteVideo({ info }) {

  return (
    <div className="note-video" >
        <div className="note-video-container">
        <iframe src={info.url}></iframe>
        </div>
      <h2 contentEditable={true}>{info.title}</h2>
      
    </div>
  );
}
