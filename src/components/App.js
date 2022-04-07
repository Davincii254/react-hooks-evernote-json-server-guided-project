import React, {useState, useEffect} from "react";
import Header from "./Header";
import NoteContainer from "./NoteContainer";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState([]);

  function handleLoggedIn(){
    setIsLoggedIn( (isLoggedIn) => !isLoggedIn);
  }

 
  useEffect(() => {
      fetch(`http://localhost:3000/users`)
        .then(r => r.json())
        .then(data => setUser(data))
        .catch(error => alert(error));
  }, []);
  
  
  return (
    <div className="app">
      <Header 
      isLoggedIn={isLoggedIn}
      handleLoggedIn={handleLoggedIn}
      user={user}
      />
      <NoteContainer isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default App;
