import React from "react";

function NoteViewer({showItem, handleEditBtn}) {
  return (
    <>
      <h2>{showItem.title}</h2>
      <p>{showItem.body}</p>
      <button onClick={() => handleEditBtn(showItem)}>Edit</button>
    </>
  );
}

export default NoteViewer;
