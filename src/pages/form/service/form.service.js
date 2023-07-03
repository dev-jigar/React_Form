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
export const UpdateUserStore = (key, values) => {
  const editData = JSON.parse(getLocalStorage("BankUser"));

  const index = editData.findIndex((item) => item.id === values.id);

  if (index !== -1) {
    editData.splice(index, 1);
    setLocalStoreage(key, editData);
    console.log("done removal");
  }

  if (getLocalStorage(key)) {
    var oldUser = JSON.parse(getLocalStorage(key));
  } else {
    oldUser = [];
  }

  setLocalStoreage(key, [...oldUser, values]);
  succesToast("User Updated Successfully!");
};
