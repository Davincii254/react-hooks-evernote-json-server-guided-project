import React from "react";

function NoteViewer({showItem}) {
  return (
    <>
      <h2>{showItem.title}</h2>
      <p>{showItem.body}</p>
      <button>Edit</button>
    </>
  );
}

export default NoteViewer;
