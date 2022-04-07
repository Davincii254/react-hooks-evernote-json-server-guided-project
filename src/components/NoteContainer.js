import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {

  
  const [noteList, setNoteList] = useState([]);

  const [showItem, setShowItem] = useState({});

  const [search, setSearch] = useState("");

  const [updateList, setUpdateList] = useState(false);

  const [sortAlpha, setSortAlpha] = useState(false);

  useEffect( () => {
    fetch(`http://localhost:3000/notes`)
    .then(r => r.json())
    .then(data => setNoteList(data))
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
    .then(data => setNoteList([...noteList, data]))
    .catch(error => alert(error));

  }

  function handleUpdateList(){
    setUpdateList( (updateList) => !updateList);
  }

  function handleDeleteItem(deleteItem){
    const newList = noteList.filter(item => item.id !== deleteItem.id);
    setNoteList(newList);
    setShowItem({});
  }

  function handleSortAlpha(e){
    setSortAlpha(e.target.checked);
  }

  if(sortAlpha){
    noteList.sort( (first, second) => first.title.localeCompare(second.title));
  }

  const filterList = noteList.filter( item => {
    if(search !== ""){
      return item.title.toLowerCase().includes(search);
    }
    else{
      return true;
    }
  });

  return (
    <>
      <Search 
      search={search} 
      handleSearch={handleSearch}
      sortAlpha={sortAlpha}
      handleSortAlpha={handleSortAlpha}
      />
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
        handleDeleteItem={handleDeleteItem}
        />
      </div>
    </>
  );
}

export default NoteContainer;
