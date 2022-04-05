import React from "react";

function NoteItem({id, userId, title, caption, body, handleShow}) {


  return (
    <li onClick={() => handleShow(id, userId, title, body)}>
      <h2>{title}</h2>
      <p>{`${caption}...`}</p>
    </li>
  );
}

export default NoteItem;
