import React, { useCallback, useEffect, useRef, useState } from "react";
import FormInputs from "./FormInputs";

const Step2 = (props) => {
  const [formErrors, setFormErrors] = useState({
    setemailErr: "",
    setmobileErr: "",
  });
  const isMounted = useRef(false);
  const { dynamicData, setDynamicData, handleAddMore, setFormData, formData } =
    props;
  const removeDataById = (id) => {
    const index = dynamicData.findIndex((item) => item.id === id);
    if (index !== -1) {
      const updatedData = [...dynamicData];
      updatedData.splice(index, 1);
      setDynamicData(updatedData);
    }
  };

  function isValidEmail(email) {
    let regex = new RegExp(
      " /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/"
    );
    return regex.test(email);
  }
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
  const handleChange = (e, name, p) => {
    const copyofcontacts = [...dynamicData];
    copyofcontacts[p][name] = e.target.value;
    setDynamicData(copyofcontacts);
  };
  const validateErrors = () => {
    dynamicData.map((element, i = 0) => {
      return checkVal(
        !element.email,
        "setemailErr",
        "Please Enter Email",
        !element.email.length > 4,
        "Email should be greater than 4 characters",
        isValidEmail(element.email),
        "Please Enter valid Email"
      );
    });

    dynamicData.map((element, i) => {
      return checkVal(
        !element.mobile,
        "setmobileErr",
        "Please Enter Mobile Number",
        element.mobile.length < 9,
        "Mobile Number should be greater than 9 digit and less than 11 digit",
        !/^[0-9]\d*(\.\d+)?$/.test(element.mobile),
        "Mobile valid mobile number"
      );
    });
  };
  useEffect(() => {
    if (isMounted.current) {
      const errorMessages = Object.values(formErrors);
      const isError = errorMessages.some((element) => element !== "");
      if (!isError) {
        setFormData({
          ...formData,
          Contact_Details: { ...dynamicData },
          currentStep: formData?.currentStep + 1,
        });
      }
    } else {
      isMounted.current = true;
    }
  }, [formErrors]);

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
            handleAddMore(e);
          }}
        >
          Add More +
        </button>
      </div>
      <div>
        {dynamicData.length > 0 &&
          dynamicData.map((i, p) => {
            if (p === 0) {
              return (
                <div className="add" key={p + 1}>
                  <div className="step1 d-flex justify-content-between">
                    <div className="container mt-2 part1">
                      <div className="my-3 d-flex cc border justify-content-space-evenly">
                        <div>
                          <label className="my-3 mx-2">Email &nbsp;:</label>{" "}
                          &nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="my-3 dd">
                          <input
                            type="email"
                            placeholder="Enter Email"
                            name={`email`}
                            value={dynamicData[p].email}
                            onChange={(e) => handleChange(e, "email", p)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="container part-2 mt-2 ">
                      <div className="my-3 d-flex cc border justify-content-space-evenly">
                        <div>
                          <label className="my-3 mx-2">Mobile &nbsp;:</label>{" "}
                          &nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="my-3 dd">
                          <input
                            type="text"
                            placeholder="Enter Mobile number"
                            name={`mobile`}
                            onChange={(e) => handleChange(e, "mobile", p)}
                            value={dynamicData[p].mobile}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="add" key={dynamicData[p].id}>
                  <div className="step1 d-flex justify-content-between">
                    <div className="container mt-2 part1">
                      <div className="my-3 d-flex cc border justify-content-space-evenly">
                        <div>
                          <label className="my-3 mx-2">Email &nbsp;:</label>{" "}
                          &nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="my-3 dd">
                          <input
                            type="email"
                            placeholder="Enter Email"
                            name={`email`}
                            onChange={(e) => handleChange(e, "email", p)}
                            value={dynamicData[p].email}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="container part-2 mt-2 ">
                      <div className="my-3 d-flex cc border justify-content-space-evenly">
                        <div>
                          <label className="my-3 mx-2">Mobile &nbsp;:</label>
                          &nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="my-3 dd">
                          <input
                            type="number"
                            max={10}
                            placeholder="Enter Mobile number"
                            name={`mobile`}
                            onChange={(e) => handleChange(e, "mobile", p)}
                            value={dynamicData[p].mobile}
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={(e) => removeDataById(dynamicData[p].id)}
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
        <div className="errors d-flex justify-content-between text-center mx-5">
          <small>
            <span className="text-danger">{formErrors["setemailErr"]}</span>
          </small>
          <small>
            <span className="text-danger">{formErrors["setmobileErr"]}</span>
          </small>
        </div>
      </div>

      <div className="d-flex justify-content-between">
        <button
          className="btn mx-5 btn-danger w-25 text-light p-2 mt-3 px-2 align-left"
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
          className="btn mx-5 btn-success w-25 text-light p-2 mt-3 px-2"
          data-toggle="tooltip"
          type="button"
          data-placement="bottom"
          title="Next"
          onClick={(e) => validateErrors()}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Step2;
