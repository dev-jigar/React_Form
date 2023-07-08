import { getLocalStorage } from "../../utils/helpers";

const INITIAL_STATE = {
  data: JSON.parse(getLocalStorage("BankUser" || [])),
};

const TableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "UPDATE_DATA":
      const { data } = action.payload;
      const existingData = state.data;
      existingData.map((element, i) => {
        if (element.id === data.id) {
          existingData[i] = data;
          return state.data === existingData;
        }
      });
      break;
    case "DELETE_DATA":
      return (state.data = action.payload);
    default:
      return state;
  }
};

export default TableReducer;
