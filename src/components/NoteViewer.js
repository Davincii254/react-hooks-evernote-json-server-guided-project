import React from "react";

function NoteViewer({showItem, handleEdit}) {
  return (
    <>
      <h2>{showItem.title}</h2>
      <p>{showItem.body}</p>
      <button onClick={handleEdit}>Edit</button>
    </>
  );
}

export default NoteViewer;
