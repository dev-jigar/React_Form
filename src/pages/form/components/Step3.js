import React, { useState } from "react";
import FormInputs from "./FormInputs";
import { IdendityProof } from "../../../utils/constants";

const Step3 = (props) => {
  return (
    <>
      <h4 className="mt-5">C-(Idendity-Proof)</h4>
      <div className="step1 d-flex justify-content-between">
        <div className="container mt-2 part1">
          <FormInputs
            name={"Document-Type"}
            type={"radio"}
            option={IdendityProof}
            value={
              props?.formData?.Idendity_Proof
                ? props?.formData?.Idendity_Proof?.document_type
                : ""
            }
            required={true}
          />
          <FormInputs
            name={"Document Number"}
            type={"number"}
            required={true}
            value={
              props?.formData?.Idendity_Proof
                ? props?.formData?.Idendity_Proof?.document_no
                : ""
            }
          />
          <FormInputs
            name={"Upload Document"}
            type={"file"}
            required={true}
            value={
              props?.formData?.Idendity_Proof
                ? props?.formData?.Idendity_Proof?.doc_image
                : ""
            }
          />
        </div>
        <div className="container part-2 mt-2 ">
          <FormInputs
            name={"Issue date"}
            type={"date"}
            required={true}
            value={
              props?.formData?.Idendity_Proof
                ? props?.formData?.Idendity_Proof?.doc_issue_date
                : ""
            }
          />
          <FormInputs
            name={"Exipiry date"}
            type={"date"}
            required={true}
            value={
              props?.formData?.Idendity_Proof
                ? props?.formData?.Idendity_Proof?.doc_exipiry_date
                : ""
            }
          />
        </div>
      </div>
      <div className="d-flex justify-content-between mx-5">
        <button
          className="btn btn-danger w-25 text-light  p-2 mt-3 px-2 align-left"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Previous"
          onClick={(e) =>
            props.setFormData({
              ...props.formData,
              currentStep: props.formData?.currentStep - 1,
            })
          }
        >
          Previous
        </button>
        <button
          className="btn btn-success text-light  w-25 p-2 mt-3 px-2"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Next"
          onClick={() =>
            props.setFormData({
              ...props.formData,
              Idendity_Proof: { ...props.idendityProof },
              currentStep: props.formData?.currentStep + 1,
            })
          }
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Step3;
