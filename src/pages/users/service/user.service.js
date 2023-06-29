import { getLocalStorage } from "../../../utils/helpers";

export const getUserData = () => {
  return JSON.parse(getLocalStorage("BankUser"));
};
