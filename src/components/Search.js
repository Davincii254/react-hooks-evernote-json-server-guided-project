import React from "react";

function Search({search, handleSearch}) {

  return (
    <div className="filter">
      <input id="search-bar" type="text" placeholder="Search Notes" value={search} onChange={handleSearch}/>
    </div>
  );
}

export default Search;
