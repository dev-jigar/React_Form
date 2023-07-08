const addData = (data) => {
  return {
    type: "ADD_DATA",
    payload: {
      data: {
        ...data,
      },
    },
  };
};

const updateData = (data) => {
  return {
    type: "UPDATE_DATA",
    payload: {
      data: {
        ...data,
      },
    },
  };
};

const deleteData = (data) => {
  return {
    type: "DELETE_DATA",
    payload: {
      data: data,
    },
  };
};

export { addData, updateData, deleteData };
