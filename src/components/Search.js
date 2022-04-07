import React from "react";

function Search({search, handleSearch, sortAlpha, handleSortAlpha}) {

  return (
    <div className="filter">
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" name="sort" checked={sortAlpha} onChange={handleSortAlpha}/>
        Alphabetically
      </label>
      <input id="search-bar" type="text" placeholder="Search Notes" value={search} onChange={handleSearch}/>

    </div>
  );
}

export default Search;
