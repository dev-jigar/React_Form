import React, { useEffect, useRef, useState } from "react";
import FormInputs from "./FormInputs";
import { AddType, Addplace, Country, states } from "../../../utils/constants";
import { StoreUser } from "../service/form.service";

const Step4 = (props) => {
  const isMounted = useRef(false);
  const { formData, setFormData, Address, setAddress } = props;
  const [formErrors, setFormErrors] = useState({
    setAddTypeErr: "",
    setAddressErr: "",
    setdistrictErr: "",
    setZipCodeErr: "",
    setCountryErr: "",
    setStateErr: "",
    setCityVillageErr: "",
    setAddLocErr: "",
  });
  const checkVal = (
    condition,
    errName,
    msg,
    condition2 = false,
    msg2 = "",
    condition3 = false,
    msg3 = ""
  ) => {
    if (condition) {
      setFormErrors((formErrors) => ({
        ...formErrors,
        [errName]: msg,
      }));
      return false;
    } else if (condition2) {
      setFormErrors((formErrors) => ({
        ...formErrors,
        [errName]: msg2,
      }));
      return false;
    } else if (condition3) {
      setFormErrors((formErrors) => ({
        ...formErrors,
        [errName]: msg3,
      }));
      return false;
    } else {
      setFormErrors((formErrors) => ({
        ...formErrors,
        [errName]: "",
      }));
      return false;
    }
  };
  const handleChange = (e, name) => {
    setAddress({
      ...Address,
      [name]: e.target.value,
    });
    // handleAddressSubmit(e);
  };

  useEffect(() => {
    if (isMounted.current) {
      const errorMessages = Object.values(formErrors);
      const isError = errorMessages.some((element) => element !== "");
      if (!isError) {
        HandleonSubmit({
          ...formData,
          Address: { ...Address },
        });
      }
    } else {
      isMounted.current = true;
    }
  }, [formErrors]);
  const HandleonSubmit = (formData) => {
    const today = new Date();
    StoreUser("BankUser", {
      ...formData,
      Address: { ...Address },
      Created_At: today.toLocaleDateString("en-US"),
    });
    // window.location.reload();
  };

  const validateErrors = () => {
    checkVal(!Address?.addType, "setAddTypeErr", "Please Select Address type");
    checkVal(!Address?.address, "setAddressErr", "Please Enter Address");
    checkVal(!Address?.district, "setdistrictErr", "Please Enter district");
    checkVal(!Address?.zip_Code, "setZipCodeErr", "Please Enter Zip-Code");
    checkVal(!Address?.Country, "setCountryErr", "Please Select Country");
    checkVal(!Address?.State, "setStateErr", "Please Select State");
    checkVal(
      !Address?.City_Village,
      "setCityVillageErr",
      "Please Select City/Village"
    );
    checkVal(
      !Address?.address_location,
      "setAddLocErr",
      "Please Enter Address Location"
    );
  };
  return (
    <>
      <h4 className="mt-5">D-(Address-Details)</h4>
      <div className="step1 d-flex justify-content-between">
        <div className="container mt-2 part1">
          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Address type &nbsp;:</label>{" "}
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <div className="dropdown d-flex flex-wrap ">
                <select
                  id={"occupation"}
                  className="p-2"
                  value={Address.addType}
                  onChange={(e) => handleChange(e, "addType")}
                >
                  <option value="" disabled selected hidden>
                    Select Address type
                  </option>
                  {AddType.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <small>
                <span className="text-danger">
                  {formErrors["setAddTypeErr"]}
                </span>
              </small>
            </div>
          </div>
          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Address &nbsp;:</label>{" "}
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <textarea
                value={Address.address}
                onChange={(e) => handleChange(e, "address")}
                cols={35}
                rows={1}
              />
            </div>
            <small>
              <span className="text-danger">{formErrors["setAddressErr"]}</span>
            </small>
          </div>
          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">District &nbsp;:</label>{" "}
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <input
                className="p-1"
                type="text"
                value={Address.district}
                name={"District"}
                placeholder="Enter District"
                onChange={(e) => handleChange(e, "district")}
              />
            </div>
            <small>
              <span className="text-danger">
                {formErrors["setdistrictErr"]}
              </span>
            </small>
          </div>
          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Zip-Code &nbsp;:</label>{" "}
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <input
                className="p-1"
                type="number"
                value={Address.zip_Code}
                name={"zip_Code"}
                placeholder="Enter Zip-Code"
                onChange={(e) => handleChange(e, "zip_Code")}
              />
            </div>
            <small>
              <span className="text-danger">{formErrors["setZipCodeErr"]}</span>
            </small>
          </div>
        </div>
        <div className="container part-2 mt-2 ">
          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Address location &nbsp;:</label>{" "}
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <div className="dropdown d-flex flex-wrap ">
                <select
                  id={"address_location"}
                  className="p-2"
                  value={Address.address_location}
                  onChange={(e) => handleChange(e, "address_location")}
                >
                  <option value="" disabled selected hidden>
                    Select Address location
                  </option>
                  {Addplace.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <small>
                <span className="text-danger">
                  {formErrors["setAddLocErr"]}
                </span>
              </small>
            </div>
          </div>
          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Country &nbsp;:</label>{" "}
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <div className="dropdown d-flex flex-wrap ">
                <select
                  id={"Country"}
                  className="p-2"
                  value={Address.Country}
                  onChange={(e) => handleChange(e, "Country")}
                >
                  <option value="" disabled selected hidden>
                    Select Country
                  </option>
                  {Country.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <small>
                <span className="text-danger">
                  {formErrors["setCountryErr"]}
                </span>
              </small>
            </div>
          </div>
          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">State &nbsp;:</label>{" "}
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <div className="dropdown d-flex flex-wrap ">
                <select
                  id={"State"}
                  className="p-2"
                  value={Address.State}
                  onChange={(e) => handleChange(e, "State")}
                >
                  <option value="" disabled selected hidden>
                    Select State
                  </option>
                  {states.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <small>
                <span className="text-danger">{formErrors["setStateErr"]}</span>
              </small>
            </div>
          </div>
          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">City/Village &nbsp;:</label>{" "}
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <input
                className="p-1"
                type="text"
                value={Address.City_Village}
                name={"City_Village"}
                placeholder="Enter City/Village"
                onChange={(e) => handleChange(e, "City_Village")}
              />
            </div>
            <small>
              <span className="text-danger">
                {formErrors["setCityVillageErr"]}
              </span>
            </small>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between mx-5">
        <button
          className="btn btn-danger w-25 text-light  p-2 mt-3 px-2 align-left"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Previous"
          onClick={(e) =>
            setFormData({
              ...formData,
              currentStep: formData?.currentStep - 1,
            })
          }
        >
          Previous
        </button>
        <button
          data-toggle="tooltip"
          data-placement="bottom"
          title="Submit"
          type="button"
          className="btn btn-success w-25 text-light p-2 mt-3 px-2 align-left"
          onClick={(e) => validateErrors()}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Step4;
