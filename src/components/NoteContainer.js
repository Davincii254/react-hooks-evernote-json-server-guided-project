import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {

  const [list, setList] = useState([]);
  const [showItem, setShowItem] = useState({});

  useEffect( () => {
    fetch(`http://localhost:3000/notes`)
    .then(r => r.json())
    .then(data => setList(data));
  },[]);

  function handleShow(title, body){
    setShowItem({title: title, body: body});
    //console.log(showItem);
  }

  return (
    <>
      <Search />
      <div className="container">
        <Sidebar list={list} handleShow={handleShow}/>
        <Content showItem={showItem}/>
      </div>
    </>
  );
}

export default NoteContainer;
