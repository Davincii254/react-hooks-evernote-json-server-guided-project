import React from "react";
import NoteList from "./NoteList";

function Sidebar({list}) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList list={list}/>
      <button>New</button>
    </div>
  );
}

export default Sidebar;
