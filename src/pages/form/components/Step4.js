import React from "react";
import FormInputs from "./FormInputs";
import { AddType, Addplace, Country, states } from "../../../utils/constants";

const Step4 = (props) => {
  return (
    <>
      <h4 className="mt-5">D-(Address-Details)</h4>
      <div className="step1 d-flex justify-content-between">
        <div className="container mt-2 part1">
          <FormInputs
            name={"Address type"}
            type={"select"}
            option={AddType}
            required={true}
          />
          <FormInputs name={"Address"} type={"textarea"} required={true} />
          <FormInputs name={"District"} required={true} />
          <FormInputs name={"Zip-Code"} type={"number"} required={true} />
        </div>
        <div className="container part-2 mt-2 ">
          <FormInputs
            name={"Address location"}
            type={"select"}
            option={Addplace}
            required={true}
          />
          <FormInputs
            name={"Country"}
            type={"select"}
            option={Country}
            required={true}
          />
          <FormInputs
            name={"State"}
            type={"select"}
            option={states}
            required={true}
          />
          <FormInputs name={"City/Village"} required={true} />
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
          data-toggle="tooltip"
          data-placement="bottom"
          title="Submit"
          className="btn btn-success w-25 text-light p-2 mt-3 px-2 align-left"
          onClick={() => props.onSubmit()}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Step4;
