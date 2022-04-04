import React from "react";

function NoteEditor({showItem}) {
  return (
    <form className="note-editor">
      <input type="text" name="title" value={showItem.title}/>
      <textarea name="body" value={showItem.body}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
