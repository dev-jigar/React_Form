import React, { useEffect, useState } from "react";

const Search = ({
  data,
  setFiltered,
  limit,
  currentPage,
  setCurrentPage,
  setIsSeaching,
  search,
  setSearch,
}) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
    if (search === "") {
      setIsSeaching(false);
      const oldData = [...data];
      setFiltered([]);
    } else {
      let searchedItems = data.filter(
        (curr) =>
          curr.personalDetails.fullName.toLowerCase().includes(search) ||
          curr.Contact_Details[0].email.toLowerCase().includes(search) ||
          curr.personalDetails.AccountType.toLowerCase().includes(search) ||
          curr.personalDetails.dob.toLowerCase().includes(search) ||
          curr.Contact_Details[0].mobile.includes(search) ||
          curr.personalDetails.Pan.toLowerCase().includes(search) ||
          curr.Idendity_Proof.document_type.toLowerCase().includes(search)
      );

      if (search !== "") {
        if (searchedItems?.length > 0) {
          setIsSeaching(true);
        }
        setFiltered(searchedItems);
      }
    }
  }, [data, search]);
  return (
    <div>
      <label htmlFor="">Search:</label>
      <input
        onChange={(e) => {
          handleSearch(e);
        }}
        type="text"
        className="rounded-pill p-3 mx-3"
        style={{ fontSize: "25px" }}
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
