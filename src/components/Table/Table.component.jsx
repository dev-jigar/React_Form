import React, { useCallback, useEffect, useState } from "react";
import "./style.css";
import Search from "../search/Search";
import {
  errorToast,
  getLocalStorage,
  setLocalStoreage,
} from "../../utils/helpers";
import { Link } from "react-router-dom";
import Pagination from "../pagination/Pagination";
const TableComponent = ({ data, title, columns, setData }) => {
  //states
  const [tabledata, setTableData] = useState(data);
  const [filtered, setFiltered] = useState([]);
  const [searchedRecord, setsearchedRecord] = useState([]);
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [isSeaching, setIsSeaching] = useState(false);
  const [search, setSearch] = useState("");

  //handle delete functionality
  const handleDeleteUser = (id) => {
    const index = data.findIndex((item) => item.id === id);
    if (index !== -1) {
      data.splice(index, 1);
      setLocalStoreage("BankUser", data);
      const updatedData = getLocalStorage("BankUser");
      setData(JSON.parse(updatedData));
    }
  };

  //for pagination and load resources
  useEffect(() => {
    const lastRecordIndex = currentPage * limit;
    const firstRecordIndex = lastRecordIndex - limit;
    const currentData = data.slice(firstRecordIndex, lastRecordIndex);
    if (filtered?.length > 0) {
      var records = filtered.slice(firstRecordIndex, lastRecordIndex);
      setsearchedRecord(records);
    }
    if (filtered?.length === 0) {
      setsearchedRecord([]);
      setTableData(currentData);
    }
  }, [currentPage, data, filtered]);

  //sorting data of table
  const getDataSorted = (sorttype, sortCol) => {
    if (currentPage !== 1) {
      setCurrentPage(1);
    }
    let sortcolData = [...data];
    if (sortCol === "Date of Birth") {
      if (sorttype === "asc") {
        return setData(
          sortcolData.sort((a, b) =>
            a[`personalDetails`][`dob`] > b[`personalDetails`][`dob`] ? 1 : -1
          )
        );
      } else if (sorttype === "desc") {
        return setData(
          sortcolData.sort((a, b) =>
            a[`personalDetails`][`dob`] < b[`personalDetails`][`dob`] ? 1 : -1
          )
        );
      } else {
        console.log("Resetting data.");
        return;
      }
    } else if (sortCol === "Name") {
      if (sorttype === "asc") {
        return setData(
          sortcolData.sort((a, b) =>
            a[`personalDetails`][`fullName`] > b[`personalDetails`][`fullName`]
              ? 1
              : -1
          )
        );
      } else if (sorttype === "desc") {
        return setData(
          sortcolData.sort((a, b) =>
            a[`personalDetails`][`fullName`] < b[`personalDetails`][`fullName`]
              ? 1
              : -1
          )
        );
      } else {
        console.log("Resetting data.");
        return;
      }
    } else if (sortCol === "Account Type") {
      if (sorttype === "asc") {
        return setData(
          sortcolData.sort((a, b) =>
            a[`personalDetails`][`AccountType`] >
            b[`personalDetails`][`AccountType`]
              ? 1
              : -1
          )
        );
      } else if (sorttype === "desc") {
        return setData(
          sortcolData.sort((a, b) =>
            a[`personalDetails`][`AccountType`] <
            b[`personalDetails`][`AccountType`]
              ? 1
              : -1
          )
        );
      } else {
        console.log("Resetting data.");
        return;
      }
    } else if (sortCol === "email") {
      if (sorttype === "asc") {
        return setData(
          sortcolData.sort((a, b) =>
            a.Contact_Details[0][`email`] > b.Contact_Details[0][`email`]
              ? 1
              : -1
          )
        );
      } else if (sorttype === "desc") {
        return setData(
          sortcolData.sort((a, b) =>
            a.Contact_Details[0][`email`] < b.Contact_Details[0][`email`]
              ? 1
              : -1
          )
        );
      } else {
        console.log("Resetting data.");
        return;
      }
    } else if (sortCol === "Phone") {
      if (sorttype === "asc") {
        return setData(
          sortcolData.sort((a, b) =>
            a.Contact_Details[0][`mobile`] > b.Contact_Details[0][`mobile`]
              ? 1
              : -1
          )
        );
      } else if (sorttype === "desc") {
        return setData(
          sortcolData.sort((a, b) =>
            a.Contact_Details[0][`mobile`] < b.Contact_Details[0][`mobile`]
              ? 1
              : -1
          )
        );
      } else {
        console.log("Resetting data.");
        return;
      }
    } else if (sortCol === "Pan") {
      if (sorttype === "asc") {
        return setData(
          sortcolData.sort((a, b) =>
            a[`personalDetails`][`Pan`] > b[`personalDetails`][`Pan`] ? 1 : -1
          )
        );
      } else if (sorttype === "desc") {
        return setData(
          sortcolData.sort((a, b) =>
            a[`personalDetails`][`Pan`] < b[`personalDetails`][`Pan`] ? 1 : -1
          )
        );
      } else {
        console.log("Resetting data.");
        return;
      }
    } else if (sortCol === "gender") {
      if (sorttype === "asc") {
        return setData(
          sortcolData.sort((a, b) =>
            a[`personalDetails`][`gender`] > b[`personalDetails`][`gender`]
              ? 1
              : -1
          )
        );
      } else if (sorttype === "desc") {
        return setData(
          sortcolData.sort((a, b) =>
            a[`personalDetails`][`gender`] < b[`personalDetails`][`gender`]
              ? 1
              : -1
          )
        );
      } else {
        console.log("Resetting data.");
        return;
      }
    } else if (sortCol === "Verified By") {
      if (sorttype === "asc") {
        return setData(
          sortcolData.sort((a, b) =>
            a[`Idendity_Proof`][`document_type`] >
            b[`Idendity_Proof`][`document_type`]
              ? 1
              : -1
          )
        );
      } else if (sorttype === "desc") {
        return setData(
          sortcolData.sort((a, b) =>
            a[`Idendity_Proof`][`document_type`] <
            b[`Idendity_Proof`][`document_type`]
              ? 1
              : -1
          )
        );
      } else {
        console.log("Resetting data.");
        return;
      }
    }
  };
  return (
    <>
      <div className="my-5">Groupby</div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table>
          <tbody>
            <td>
              <tr>
                <td colSpan={5}>{title ? title : "All Data"}</td>
                <td colSpan={6}>
                  <Search
                    initialData={data}
                    data={data}
                    setFiltered={setFiltered}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    limit={limit}
                    setIsSeaching={setIsSeaching}
                    search={search}
                    setSearch={setSearch}
                  />
                </td>
              </tr>
              <tr className="cols">
                <td>#</td>
                {columns?.map((col, i = 1) => (
                  <td key={i}>
                    <span
                      onClick={(e) => {
                        if (sort === "") {
                          setSort("asc");
                          getDataSorted("asc", col, i + 1);
                        } else if (sort === "asc") {
                          setSort("desc");
                          getDataSorted("desc", col, i + 1);
                        } else if (sort === "desc") {
                          getDataSorted("", col, i + 1);
                          setSort("");
                        }
                      }}
                    >
                      {col}
                    </span>
                  </td>
                ))}
                <td>View</td>
                <td>Delete</td>
              </tr>

              {searchedRecord.length > 0
                ? searchedRecord?.map((d, i) => (
                    <tr key={searchedRecord[i].id}>
                      <td className="text-dark">{i + 1}</td>
                      <td className="text-dark">
                        {"aaa" + " " + d.personalDetails.fullName}
                      </td>
                      <td className="text-dark">
                        {d.Contact_Details[0].email}
                      </td>
                      <td className="text-dark">{d.personalDetails.dob}</td>
                      <td className="text-dark">
                        {d.personalDetails.AccountType}
                      </td>
                      <td className="text-dark">{d.personalDetails.Pan}</td>
                      <td className="text-dark">
                        {d.Idendity_Proof.document_type}
                      </td>
                      <td className="text-dark">
                        {d.Contact_Details[0].mobile}
                      </td>
                      <td className="text-dark">
                        &nbsp;{d?.personalDetails.gender}
                      </td>
                      <td className="text-dark">
                        <button className="btn btn-info">
                          <Link to={`/?id=${searchedRecord[i].id}`}>Edit</Link>
                        </button>
                      </td>
                      <td className="text-dark">
                        <button
                          className="btn btn-danger"
                          onClick={(e) => handleDeleteUser(data[i].id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                : isSeaching === false &&
                  tabledata?.map((d, i) => {
                    return (
                      <tr key={tabledata[i].id}>
                        <td className="text-dark">{tabledata[i].id}</td>
                        <td className="text-dark">
                          {"bbb" + " " + d.personalDetails.fullName}
                        </td>
                        <td className="text-dark">
                          {d.Contact_Details[0].email}
                        </td>
                        <td className="text-dark">{d.personalDetails.dob}</td>
                        <td className="text-dark">
                          {d.personalDetails.AccountType}
                        </td>
                        <td className="text-dark">{d.personalDetails.Pan}</td>
                        <td className="text-dark">
                          {d.Idendity_Proof.document_type}
                        </td>
                        <td className="text-dark">
                          {d.Contact_Details[0].mobile}
                        </td>
                        <td className="text-dark">
                          &nbsp;{d?.personalDetails.gender}
                        </td>
                        <td className="text-dark">
                          <button className="btn btn-info">
                            <Link to={`/?id=${tabledata[i].id}`}>Edit</Link>
                          </button>
                        </td>
                        <td className="text-dark">
                          <button
                            className="btn btn-danger"
                            onClick={(e) => handleDeleteUser(data[i].id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
            </td>
          </tbody>
        </table>
      </div>
      {/* pagination */}
      <div className="Pagination">
        <Pagination
          totalData={search !== "" ? filtered.length : data.length}
          limit={limit}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          setsearchedRecord={setsearchedRecord}
          searchedRecord={searchedRecord}
          isSeaching={isSeaching}
          search={search}
        />
      </div>
    </>
  );
};

export default TableComponent;
