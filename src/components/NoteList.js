import React from "react";
import NoteItem from "./NoteItem";

function NoteList({list, handleShow}) {

  const noteList = list.map(note => (
    <NoteItem 
    key={note.id}
    id={note.id}
    userId={note.userId} 
    title={note.title} 
    caption={note.body.slice(0,20)} 
    body={note.body}
    handleShow={handleShow}/>
  ));

  return (
    <ul>
      {/* Render list of notes here... */}
      {noteList}
    </ul>
  );
}

export default NoteList;
