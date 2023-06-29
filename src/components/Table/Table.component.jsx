import React from "react";
import "./style.css";
import Search from "../search/Search";
const TableComponent = ({ data, title, columns }) => {
  const handleDeleteUser = (e, id) => {
    console.log("🚀 ~ file: Table.component.jsx:6 ~ TableComponent ~ id:", id);
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
                  <td className="text-dark">
                    &nbsp;{d?.Created_At || "25-01-2022"}
                  </td>
                  <td className="text-dark">
                    <button className="btn btn-info">Edit</button>
                  </td>
                  <td className="text-dark">
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDeleteUser(e, data[i].id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </td>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableComponent;
