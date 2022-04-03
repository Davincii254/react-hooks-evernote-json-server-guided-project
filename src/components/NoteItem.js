import React from "react";

function NoteItem({title,caption, body, handleShow}) {


  return (
    <li onClick={() => handleShow(title, body)}>
      <h2>{title}</h2>
      <p>{`${caption}...`}</p>
    </li>
  );
}

export default NoteItem;
