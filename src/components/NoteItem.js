import React from "react";

function NoteItem({title, caption}) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{`${caption}...`}</p>
    </li>
  );
}

export default NoteItem;
