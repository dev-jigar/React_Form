import React, { useState } from "react";

const Pagination = ({ limit, totalData, paginate, setLimit, currentPage }) => {
  console.log(
    "🚀 ~ file: Pagination.jsx:4 ~ Pagination ~ limit, totalData, paginate, setLimit, currentPage:",
    // limit
    // totalData
    // paginate

    currentPage
  );
  const pageNumber = [];
  for (let i = 0; i < Math.ceil(totalData / limit); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="Pagination p-3">
      <select
        name="recordPerPage"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
        className="p-3"
        style={{ fontSize: "25px" }}
      >
        <option value={2}>2</option>
        <option value={4}>4</option>
        <option value={6}>6</option>
      </select>
      {pageNumber.map((number) => (
        <>
          <button
            className={currentPage === number ? "active" : ""}
            key={number}
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        </>
      ))}
    </div>
  );
};

export default Pagination;
