export function VideoForm({noteToAddType, onSaveNote, notes, setNotes, handleChange, noteToAdd }) {

    function convertToEmbed(url) {
        // Check if the URL is a valid YouTube URL
        if (!/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/.test(url)) {
          return 'Invalid YouTube URL';
        }
        // Extract the video ID from the URL
        const videoId = url.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/)[1];
      
        // Return the embedded YouTube link
        return `https://www.youtube.com/embed/${videoId}`;
      }



    return <form onSubmit={onSaveNote}>
    <input
      onChange={handleChange}
      value={noteToAdd.info.title}
      name="title"
      type="text"
      id="title"
      placeholder="Title"
    />
    <textarea
    
      placeholder="Enter Video URL..."
      name="url"
      id="url"
      value={noteToAdd.info.url}
      cols="30"
      rows="3"
      onChange={handleChange}
    ></textarea>
    <button className="add-note-btn">Add note</button>
  </form>
}