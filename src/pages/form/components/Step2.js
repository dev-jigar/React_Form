import React, { useCallback, useEffect, useState } from "react";
import FormInputs from "./FormInputs";

const Step2 = (props) => {
  const [ContactDetails, setContactDetails] = useState(props.dynamicData);

  const handleDel = useCallback(
    (e, id) => {
      e.preventDefault();
      if (id > -1) {
        props.dynamicData.splice(id, 1);
      }
    },
    [props.dynamicData]
  );

  return (
    <>
      <h4 className="mt-5">B-(Contact-Details)</h4>
      <div className="d-flex mx-3 justify-content-end">
        <button
          className="btn btn-info"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Add Additional Contact"
          onClick={(e) => {
            props.handleAddMore(e);
            setContactDetails(props.dynamicData);
          }}
        >
          Add More +
        </button>
      </div>
      {props.dynamicData.map((i, p) => {
        if (p === 0) {
          console.log(">>>>>>>?>>>>", props?.formData);
          return (
            <div className="add" key={p + 1}>
              <div className="step1 d-flex justify-content-between">
                <div className="container mt-2 part1">
                  <FormInputs
                    name={`Email${p + 1}`}
                    required={true}
                    value={
                      props?.formData?.Contact_Details
                        ? props?.formData?.Contact_Details[p]?.email
                        : ""
                    }
                  />
                </div>
                <div className="container part-2 mt-2 ">
                  <FormInputs
                    name={"Mobile no"}
                    type={"number"}
                    required={true}
                    value={
                      props?.formData?.Contact_Details
                        ? props?.formData?.Contact_Details[p]?.mobile
                        : ""
                    }
                  />
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="add" key={p + 1}>
              <div className="step1 d-flex justify-content-between">
                <div className="container mt-2 part1">
                  <FormInputs
                    name={`Email${p + 1}`}
                    required={true}
                    value={
                      props?.formData?.Contact_Details
                        ? props?.formData?.Contact_Details[p]?.email
                        : ""
                    }
                  />
                </div>
                <div className="container part-2 mt-2 ">
                  <FormInputs
                    name={"Mobile no"}
                    type={"number"}
                    required={true}
                    value={
                      props?.formData?.Contact_Details
                        ? props?.formData?.Contact_Details[p]?.mobile
                        : ""
                    }
                  />
                </div>
                <button
                  onClick={(e) => handleDel(e, p)}
                  className="btn btn-warning my-3"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Delete Contact"
                >
                  -
                </button>
              </div>
            </div>
          );
        }
      })}
      <div className="d-flex justify-content-between">
        <button
          className="btn mx-5 btn-danger w-25 text-light p-2 mt-3 px-2 align-left"
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
          className="btn mx-5 btn-success w-25 text-light p-2 mt-3 px-2"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Next"
          onClick={() =>
            props.setFormData({
              ...props.formData,
              Contact_Details: { ...props.dynamicData },
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

export default Step2;
