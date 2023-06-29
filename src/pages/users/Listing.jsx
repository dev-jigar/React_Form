import React from "react";
import TableComponent from "../../components/Table/Table.component";
import { getUserData } from "./service/user.service";
import { columns } from "../../utils/constants";

const Listing = () => {
  return (
    <div>
      <TableComponent columns={columns} data={getUserData()} title={"Users"} />
    </div>
  );
};

export default Listing;
