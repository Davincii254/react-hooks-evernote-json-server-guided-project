import React from "react";
import NoteList from "./NoteList";

function Sidebar({list, handleShow, handleCreate, isLoggedIn}) {



  return (
    <div className="master-detail-element sidebar">
      <NoteList list={list} handleShow={handleShow}/>
      {isLoggedIn ? <button onClick={handleCreate}>New</button>: null}
    </div>
  );
}

export default Sidebar;
