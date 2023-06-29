// export const handleChange = (event) => {
//   console.log("called ...");
//   setFormData({
//     currentStep: formData.currentStep + 1,
//   });
// };
// export const PreviousChange = (event) => {
//   setFormData({
//     currentStep: formData.currentStep - 1,
//   });
// };

import { toast } from "react-toastify";

export const setLocalStoreage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (name) => {
  return localStorage.getItem(name);
};
export const succesToast = (message) => toast.success(message);
export const makeRandomId = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};
