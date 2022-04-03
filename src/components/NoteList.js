import React from "react";
import NoteItem from "./NoteItem";

function NoteList({list}) {

  const noteList = list.map(note => (
    <NoteItem title={note.title} caption={note.body.slice(0,20)}/>
  ));

  return (
    <ul>
      {/* Render list of notes here... */}
      {noteList}
    </ul>
  );
}

export default NoteList;
