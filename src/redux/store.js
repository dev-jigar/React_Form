import { createStore } from "redux";
import TableReducer from "./reducers/TableReducer";

const store = createStore(TableReducer);
console.log(store.getState());

export default store;
