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
      //   console.log("heheh>>>>>>");
      //   const { id, data } = action.payload;
      //   console.log(
      //     "🚀 ~ file: TableReducer.js:17 ~ TableReducer ~ id, data:",
      //     id,
      //     data
      //   );
      //   const existingData = state.data;
      //   existingData.map((element, i) => {
      //     if (element[0].id === id) {
      //       existingData[i] = data;
      //       return state.data === existingData;
      //     }
      //   });
      break;
    case "DELETE_DATA":
      return {};

    default:
      return state;
  }
};

export default TableReducer;
