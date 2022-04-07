import React from "react";

function Header({isLoggedIn, handleLoggedIn, user}) {

  return (
    <div>
      <button onClick={handleLoggedIn}>{isLoggedIn ? "Logout" : "Login"}</button>
      <div className="nav-bar">
        <ul>
          <li className="nav-item">
            <h2>{isLoggedIn ? `${user[0].name.charAt(0).toUpperCase() + user[0].name.slice(1, user[0].name.length - 1)}'s Note Collection` 
            : "Welcome, Please Login"}
            </h2>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
