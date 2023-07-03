import React, { useEffect, useRef, useState } from "react";
import {
  AccountType,
  CategoryCheck,
  EducationalQulification,
  Gender,
  disablity,
  maritalStatus,
  occupationType,
} from "../../../utils/constants";

const Step1 = (props) => {
  const isMounted = useRef(false);
  const [formErrors, setFormErrors] = useState({
    setAccountTypeErr: "",
    setCategoryErr: "",
    setEduQulificationErr: "",
    setFnameErr: "",
    setGenderErr: "",
    setOccupationErr: "",
    setPanErr: "",
    setSubjectDisableErr: "",
    setaIncomeErr: "",
    setdobErr: "",
    setmaritailStatusErr: "",
  });
  const [personalDetails, setPersonalData] = useState(
    props?.formData?.personalDetails
      ? {
          ...props?.formData?.personalDetails,
        }
      : {
          fullName: "",
          dob: "", //2003-07-16
          gender: "",
          maritailStatus: "",
          nationality: "",
          aIncome: "",
          occupation: "",
          subjectDisable: "",
          Category: "",
          EduQulification: "",
          Pan: "",
          AccountType: "",
        }
  );

  const handleChange = (e, name) => {
    setPersonalData({
      ...personalDetails,
      [name]: e.target.value,
    });
    // handleNext(e);
  };

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
  useEffect(() => {
    if (isMounted.current) {
      const errorMessages = Object.values(formErrors);
      const isError = errorMessages.some((element) => element !== "");
      if (!isError) {
        props.setFormData({
          ...props.formData,
          personalDetails: { ...personalDetails },
          currentStep: props.formData?.currentStep + 1,
        });
      }
    } else {
      isMounted.current = true;
    }
  }, [formErrors]);

  const validateErrors = () => {
    checkVal(
      !personalDetails.fullName,
      "setFnameErr",
      "Please Enter FirstName",
      personalDetails.fullName.length < 2,
      "First name should be greater than 1 characters",
      !/[a-zA-Z]/.test(personalDetails.fullName),
      "Name must be alphabetical"
    );

    checkVal(
      !personalDetails.dob,
      "setdobErr",
      "Please Select a Date of birth",
      2012 < new Date(personalDetails.dob).getFullYear(),
      "Please Enter date of birth less than 2012"
    );
    checkVal(!personalDetails.gender, "setGenderErr", "Please Select a gender");
    checkVal(
      !personalDetails.maritailStatus,
      "setmaritailStatusErr",
      "Please Select a Maritail Status"
    );
    checkVal(
      !personalDetails.occupation,
      "setOccupationErr",
      "Please Select a occupation"
    );
    checkVal(
      !personalDetails.aIncome,
      "setaIncomeErr",
      "Annual Income is required",
      10000 > personalDetails.aIncome,
      "Annual income must be greater then 1LPA",
      !/^[0-9]\d*(\.\d+)?$/.test(personalDetails.aIncome),
      "Income must be positive"
    );
    checkVal(
      !personalDetails.subjectDisable,
      "setSubjectDisableErr",
      "Field is required"
    );
    checkVal(!personalDetails.Category, "setCategoryErr", "Field is required");
    checkVal(
      !personalDetails.EduQulification,
      "setEduQulificationErr",
      "Select Educational Information"
    );
    checkVal(
      !personalDetails.Pan,
      "setPanErr",
      "Enter Pan Number",
      /[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(personalDetails?.Pan),
      "Please enter Valid PAN number"
    );
    checkVal(
      !personalDetails.AccountType,
      "setAccountTypeErr",
      "Select Account-Type"
    );
  };

  return (
    <>
      <h4 className="mt-5">A-(Personal-Details)</h4>
      <div className="step1 d-flex justify-content-between">
        <div className="container mt-2 part1">
          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Full Name &nbsp;:</label>
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <input
                type="text"
                placeholder="Enter Name"
                value={personalDetails.fullName}
                onChange={(e) => handleChange(e, "fullName")}
              />
              <br />
              <small>
                <span className="text-danger">{formErrors["setFnameErr"]}</span>
              </small>
            </div>
          </div>

          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Date of Birth &nbsp;:</label>{" "}
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <div className="radios d-flex flex-wrap ">
                <input
                  type="date"
                  value={personalDetails.dob}
                  onChange={(e) => handleChange(e, "dob")}
                />
              </div>
              <small>
                <span className="text-danger">{formErrors["setdobErr"]}</span>
              </small>
            </div>
          </div>

          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Gender &nbsp;:</label>{" "}
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <div className="radios d-flex flex-wrap ">
                {Gender &&
                  Gender?.map((element, i) => {
                    return (
                      <>
                        <input
                          type="radio"
                          name="gender"
                          value={element}
                          onChange={(e) => handleChange(e, "gender")}
                          checked={element === personalDetails?.gender}
                        />
                        <label className="mx-2">{element}</label>
                      </>
                    );
                  })}
              </div>

              <small>
                <span className="text-danger">
                  {formErrors["setGenderErr"]}
                </span>
              </small>
            </div>
          </div>

          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Occupation &nbsp;:</label>{" "}
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <div className="dropdown d-flex flex-wrap ">
                <select
                  id={"occupation"}
                  className="p-2"
                  value={personalDetails.occupation}
                  onChange={(e) => handleChange(e, "occupation")}
                >
                  <option value="" disabled selected hidden>
                    Select Occipation
                  </option>
                  {occupationType.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <small>
                <span className="text-danger">
                  {formErrors["setOccupationErr"]}
                </span>
              </small>
            </div>
          </div>

          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Marital status &nbsp;:</label>{" "}
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <div className="radios d-flex flex-wrap ">
                <select
                  id={"maritalStatus"}
                  className="p-2"
                  value={personalDetails.maritailStatus}
                  onChange={(e) => handleChange(e, "maritailStatus")}
                >
                  <option value="" disabled selected hidden>
                    Select Marital status
                  </option>
                  {maritalStatus.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <small>
                <span className="text-danger">
                  {formErrors["setmaritailStatusErr"]}
                </span>
              </small>
            </div>
          </div>

          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Annual Income &nbsp;:</label>{" "}
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <div className="radios d-flex flex-wrap ">
                <input
                  type="number"
                  placeholder="Enter Amount"
                  value={personalDetails.aIncome}
                  onChange={(e) => handleChange(e, "aIncome")}
                />
              </div>

              <small>
                <span className="text-danger">
                  {formErrors["setaIncomeErr"]}
                </span>
              </small>
            </div>
          </div>
        </div>

        <div className="container part-2 mt-2 ">
          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Person with Disablity &nbsp;:</label>
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <div className="radios d-flex flex-wrap ">
                {disablity &&
                  disablity?.map((element, i) => {
                    return (
                      <>
                        <input
                          type="radio"
                          name={"disablity"}
                          checked={element === personalDetails?.subjectDisable}
                          onChange={(e) => handleChange(e, "subjectDisable")}
                          value={element}
                        />
                        <label className="mx-2">{element}</label>
                      </>
                    );
                  })}
              </div>
              <small>
                <span className="text-danger">
                  {formErrors["setSubjectDisableErr"]}
                </span>
              </small>
            </div>
          </div>

          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Category &nbsp;:</label>
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <div className="radios d-flex flex-wrap ">
                {CategoryCheck &&
                  CategoryCheck?.map((element, i) => {
                    return (
                      <>
                        <input
                          type="radio"
                          name={"Category"}
                          checked={element === personalDetails?.Category}
                          value={element}
                          onChange={(e) => handleChange(e, "Category")}
                        />
                        <label className="mx-2">{element}</label>
                      </>
                    );
                  })}
              </div>
              <small>
                <span className="text-danger">
                  {formErrors["setCategoryErr"]}
                </span>
              </small>
            </div>
          </div>

          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">
                Educational Qualifiaction &nbsp;:
              </label>
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <div className="radios d-flex flex-wrap ">
                <select
                  id={"EducationalQulification"}
                  className="p-2"
                  value={personalDetails.EduQulification}
                  onChange={(e) => handleChange(e, "EduQulification")}
                >
                  <option value="" disabled selected hidden>
                    Select Educational Qualifiaction
                  </option>
                  {EducationalQulification.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <small>
                <span className="text-danger">
                  {formErrors["setEduQulificationErr"]}
                </span>
              </small>
            </div>
          </div>

          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Pan &nbsp;:</label>{" "}
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <div className="radios d-flex flex-wrap ">
                <input
                  type="text"
                  placeholder="Enter Pan Number"
                  name="Pan_no"
                  value={personalDetails.Pan}
                  onChange={(e) => handleChange(e, "Pan")}
                />
              </div>{" "}
              <small>
                <span className="text-danger">{formErrors["setPanErr"]}</span>
              </small>
            </div>
          </div>

          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Account Type &nbsp;:</label>
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <div className="radios d-flex flex-wrap ">
                <select
                  id={"EducationalQulification"}
                  className="p-2"
                  value={personalDetails.AccountType}
                  onChange={(e) => handleChange(e, "AccountType")}
                >
                  <option value="" disabled selected hidden>
                    Select Account Type
                  </option>
                  {AccountType.map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <small>
                <span className="text-danger">
                  {formErrors["setAccountTypeErr"]}
                </span>
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="nextbtn">
        <button
          type="button"
          onClick={(e) => {
            validateErrors();
          }}
          className="btn btn-success w-25 text-light p-2 mt-3 px-2"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Step1;
