import React from "react";
import NoteList from "./NoteList";

function Sidebar({list, handleShow}) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList list={list} handleShow={handleShow}/>
      <button>New</button>
    </div>
  );
}

export default Sidebar;
