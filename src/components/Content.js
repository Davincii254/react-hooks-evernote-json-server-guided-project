import React,{useState} from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({showItem}) {

  const [editBool, setEditBool] = useState(false);

  function handleEdit(){
    setEditBool((editBool) => !editBool);
    console.log(editBool);
  }

  const getContent = () => {
    if (editBool) {
      return <NoteEditor />;
    } else if (Object.keys(showItem).length !== 0) {
      return <NoteViewer showItem={showItem} handleEdit={handleEdit}/>;
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
