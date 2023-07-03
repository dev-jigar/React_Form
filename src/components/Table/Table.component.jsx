import React, { useEffect, useState } from "react";
import "./style.css";
import Search from "../search/Search";
import { setLocalStoreage } from "../../utils/helpers";
import { Link } from "react-router-dom";
import Pagination from "../pagination/Pagination";
const TableComponent = ({ data, title, columns, sort, localkey }) => {
  const [tabledata, setTableData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(1);
  const handleDeleteUser = (id) => {
    const index = tabledata.findIndex((item) => item.id === id);
    if (index !== -1) {
      tabledata.splice(index, 1);
      const setUpdatedData = setLocalStoreage("BankUser", tabledata);
      setTableData(setUpdatedData);
    }
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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
                  <Search />
                </td>
              </tr>
              <tr className="cols">
                <td>#</td>
                {columns?.map((col, i) => (
                  <td key={i}>
                    <span>{col}</span>
                  </td>
                ))}
                <td>View</td>
                <td>Delete</td>
              </tr>

              {data?.map((d, i) => (
                <tr key={data[i].id}>
                  <td className="text-dark">{i + 1}</td>
                  <td className="text-dark">{d.personalDetails.fullName}</td>
                  <td className="text-dark">{d.Contact_Details[0].email}</td>
                  <td className="text-dark">{d.personalDetails.dob}</td>
                  <td className="text-dark">{d.personalDetails.AccountType}</td>
                  <td className="text-dark">{d.personalDetails.Pan}</td>
                  <td className="text-dark">
                    {d.Idendity_Proof.document_type}
                  </td>
                  <td className="text-dark">{d.Contact_Details[0].mobile}</td>
                  <td className="text-dark">&nbsp;{d?.Created_At}</td>
                  <td className="text-dark">
                    <button className="btn btn-info">
                      <Link to={`/?id=${data[i].id}`}>Edit</Link>
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
              ))}
            </td>
          </tbody>
        </table>
        <div className="Pagination">
          <Pagination
            limit={limit}
            setLimit={setLimit}
            totalData={data}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default TableComponent;
