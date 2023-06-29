import {
  getLocalStorage,
  setLocalStoreage,
  succesToast,
} from "../../../utils/helpers";

export const StoreUser = (key, values) => {
  if (getLocalStorage(key)) {
    var oldUser = JSON.parse(getLocalStorage(key));
  } else {
    oldUser = [];
  }
  setLocalStoreage(key, [...oldUser, values]);
  succesToast("Registered Successfully!");
};
