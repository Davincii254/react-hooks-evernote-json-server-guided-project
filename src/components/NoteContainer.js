import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {

  
  const [list, setList] = useState([]);

  const [showItem, setShowItem] = useState({});

  const [search, setSearch] = useState("");

  const [updateList, setUpdateList] = useState(false);

  useEffect( () => {
    fetch(`http://localhost:3000/notes`)
    .then(r => r.json())
    .then(data => setList(data))
    .catch(error => alert(error));
  },[updateList]);

  function handleShow(id, userId, title, body){
    setShowItem({id: id, userId: userId, title: title, body: body});
  }

  function handleSearch(e){
    setSearch(e.target.value);
  }


  function handleCreate(){

    fetch(`http://localhost:3000/notes`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        userId: 1, 
        title: "default", 
        body: "placeholder"
      })
    })
    .then(r => r.json())
    .then(data => setList([...list, data]));

  }

  function handleUpdateList(){
    setUpdateList( (updateList) => !updateList);
  }

  const filterList = list.filter( item => {
    if(search !== ""){
      return item.title.includes(search);
    }
    else{
      return true;
    }
  });

  return (
    <>
      <Search search={search} handleSearch={handleSearch}/>
      <div className="container">
        <Sidebar 
        list={filterList} 
        handleShow={handleShow}
        handleCreate={handleCreate}
        />
        <Content 
        showItem={showItem}
        handleShow={handleShow}
        handleUpdateList={handleUpdateList}
        />
      </div>
    </>
  );
}

export default NoteContainer;
