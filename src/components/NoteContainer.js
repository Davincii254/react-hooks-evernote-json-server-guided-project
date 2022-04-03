import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {

  const [list, setList] = useState([]);

  useEffect( () => {
    fetch(`http://localhost:3000/notes`)
    .then(r => r.json())
    .then(data => setList(data));
  },[]);

  return (
    <>
      <Search />
      <div className="container">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default NoteContainer;
