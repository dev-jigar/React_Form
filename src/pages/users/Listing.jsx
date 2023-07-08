import React, { useState } from "react";
import TableComponent from "../../components/Table/Table.component";
import { getUserData } from "./service/user.service";
import { columns } from "../../utils/constants";
import { useSelector } from "react-redux";

const Listing = () => {
  const userRecords = useSelector((state) => state);
  const [userDta, setUserDta] = useState(getUserData());
  return (
    <div>
      <TableComponent
        columns={columns}
        data={userDta}
        setData={setUserDta}
        title={"Users"}
        sort={userDta}
      />
    </div>
  );
};

export default Listing;
