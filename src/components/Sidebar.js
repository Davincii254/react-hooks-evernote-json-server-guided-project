import React from "react";
import NoteList from "./NoteList";

function Sidebar({list, handleShow, handleCreate}) {


  return (
    <div className="master-detail-element sidebar">
      <NoteList list={list} handleShow={handleShow}/>
      <button onClick={handleCreate}>New</button>
    </div>
  );
}

export default Sidebar;
