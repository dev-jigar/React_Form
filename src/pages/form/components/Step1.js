import React, { useState } from "react";
import FormInputs from "./FormInputs";
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
  const [personalDetails, setPersonalData] = useState({
    fullName: "asd",
    dob: "22-05-2012",
    gender: "M",
    maritailStatus: "Single",
    nationality: "asd",
    aIncome: "200000",
    occupation: "Service",
    subjectDisable: ["Yes"],
    Category: "das",
    EduQulification: "10th passed",
    Pan: "5456",
    AccountType: "Normal",
  });

  return (
    <>
      <h4 className="mt-5">A-(Personal-Details)</h4>
      <div className="step1 d-flex justify-content-between">
        <div className="container mt-2 part1">
          <FormInputs
            name={"First Name"}
            required={true}
            value={
              props?.formData?.personalDetails
                ? props?.formData?.personalDetails?.fullName
                : ""
            }
          />
          <FormInputs name={"Date of Birth"} type={"date"} required={true} />
          <FormInputs
            name={"gender"}
            value={
              props?.formData?.personalDetails
                ? props?.formData?.personalDetails?.gender
                : ""
            }
            type={"radio"}
            option={Gender}
            required={true}
          />
          <FormInputs
            name={"Occupation"}
            type={"select"}
            value={
              props?.formData?.personalDetails
                ? props?.formData?.personalDetails?.occupation
                : ""
            }
            option={occupationType}
            required={true}
          />
          <FormInputs
            name={"Marital status"}
            type={"select"}
            value={
              props?.formData?.personalDetails
                ? props?.formData?.personalDetails?.maritailStatus
                : ""
            }
            option={maritalStatus}
            required={true}
          />
          <FormInputs
            name={"Annual Income"}
            type={"number"}
            required={true}
            value={
              props?.formData?.personalDetails
                ? props?.formData?.personalDetails?.aIncome
                : ""
            }
          />
        </div>
        <div className="container part-2 mt-2 ">
          <FormInputs
            name={"Person with Disablity"}
            type={"radio"}
            value={
              props?.formData?.personalDetails
                ? props?.formData?.personalDetails?.subjectDisable
                : ""
            }
            option={disablity}
          />
          <FormInputs
            name={"Category"}
            type={"radio"}
            option={CategoryCheck}
            value={
              props?.formData?.personalDetails
                ? props?.formData?.personalDetails?.Category
                : ""
            }
          />
          <FormInputs
            name={"Educational Qualifiaction"}
            type={"select"}
            value={
              props?.formData?.personalDetails
                ? props?.formData?.personalDetails?.EduQulification
                : ""
            }
            option={EducationalQulification}
          />
          <FormInputs
            name={"Pan"}
            type={"number"}
            value={
              props?.formData?.personalDetails
                ? props?.formData?.personalDetails?.Pan
                : ""
            }
          />
          <FormInputs
            name={"Account Type"}
            type={"select"}
            value={
              props?.formData?.personalDetails
                ? props?.formData?.personalDetails?.AccountType
                : ""
            }
            option={AccountType}
          />
        </div>
      </div>
      <div className="nextbtn">
        <button
          onClick={(e) => {
            props.setFormData({
              ...props.formData,
              personalDetails: { ...personalDetails },
              currentStep: props.formData?.currentStep + 1,
            });
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
