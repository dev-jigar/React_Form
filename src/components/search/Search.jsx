import React from "react";

const Search = () => {
  return (
    <div>
      <label htmlFor="">Search:</label>
      <input
        type="text"
        className="rounded-pill p-3 mx-3"
        style={{ fontSize: "25px" }}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
