const addData = () => {
  return {
    type: "ADD_DATA",
  };
};

const updateData = () => {
  console.log("called");
  return {
    type: "UPDATE_DATA",
  };
};

const deleteData = () => {
  return {
    type: "DELETE_DATA",
  };
};

export { addData, updateData, deleteData };
