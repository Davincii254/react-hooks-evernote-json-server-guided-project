import React from "react";

function NoteEditor({editTitle, handleTitleEdit, editBody, handleBodyEdit, handleEditBtn}) {
  
  return (
    <form className="note-editor">
      <input type="text" name="title" value={editTitle} onChange={handleTitleEdit}/>
      <textarea name="body" value={editBody} onChange={handleBodyEdit}/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button" onClick={handleEditBtn}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
