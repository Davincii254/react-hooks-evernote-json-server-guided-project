import React from "react";

function NoteViewer({showItem, handleEditBtn, handleDeleteItem}) {


  function handleDeleteClick(){
    fetch(`http://localhost:3000/notes/${showItem.id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(() => handleDeleteItem(showItem))
    .catch(error => alert(error));
  }

  return (
    <>
      <h2>{showItem.title}</h2>
      <p>{showItem.body}</p>
      <button onClick={() => handleEditBtn(showItem)}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </>
  );
}

export default NoteViewer;
