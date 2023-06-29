import React, { useEffect, useRef, useState } from "react";
import { IdendityProof } from "../../../utils/constants";

const Step3 = (props) => {
  const isMounted = useRef(false);
  const [formErrors, setFormErrors] = useState({
    setNoDocErr: "",
    setDocNoErr: "",
    setDocImageErr: "",
    setDocIssueErr: "",
    setDocExpErr: "",
  });
  const { formData, setFormData, idendityProof, setIdendityProof } = props;
  const onFileUpload = (e) => {
    const selectableMaxFileSize = 1024 * 1024 * 10;
    let initialFileSize = 0;

    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        const file = e.target.files[i];
        initialFileSize += file.size;
      }
      if (initialFileSize > selectableMaxFileSize) {
        alert("Cannot Upload more than 10mb");
        e.target.value = "";
        return;
      }
    }
  };
  const handleChange = (e, name) => {
    setIdendityProof({
      ...idendityProof,
      [name]: e.target.value,
    });
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
        setFormData({
          ...formData,
          Idendity_Proof: { ...idendityProof },
          currentStep: formData?.currentStep + 1,
        });
      }
    } else {
      isMounted.current = true;
    }
  }, [formErrors]);

  const validateErrors = () => {
    checkVal(
      !idendityProof?.document_type,
      "setNoDocErr",
      "Please Enter Document"
    );
    checkVal(
      !idendityProof?.document_no,
      "setDocNoErr",
      "Please Enter Document Number",
      idendityProof?.document_no.length > 13,
      "Max 12 digit document number ",
      !/^[0-9]\d*(\.\d+)?$/.test(idendityProof?.document_no),
      "Documnet number must be Number"
    );

    checkVal(
      !idendityProof?.doc_image,
      "setDocImageErr",
      "Please Enter Document"
    );
    checkVal(
      !idendityProof?.doc_issue_date,
      "setDocIssueErr",
      "Please Select a Date of Documnet Issue Date",
      2022 < new Date(idendityProof?.doc_issue_date).getFullYear(),
      "Document Issued before year 2023"
    );
    checkVal(
      !idendityProof?.doc_exipiry_date,
      "setDocExpErr",
      "Please Select a Date of Document Expiry date",
      2023 < new Date(idendityProof?.doc_exipiry_date).getFullYear(),
      "Expiry of documnet for year 2023 or greater"
    );
  };

  return (
    <>
      <h4 className="mt-5">C-(Idendity-Proof)</h4>
      <div className="step1 d-flex justify-content-between">
        <div className="container mt-2 part1">
          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Person with Disablity &nbsp;</label>
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <div className="radios d-flex flex-wrap ">
                {IdendityProof &&
                  IdendityProof?.map((element, i) => {
                    return (
                      <>
                        <input
                          type="radio"
                          name={"docType"}
                          checked={element === idendityProof?.document_type}
                          onChange={(e) => handleChange(e, "document_type")}
                          value={element}
                        />
                        <label className="mx-2">{element}</label>
                      </>
                    );
                  })}
              </div>
              <small>
                <span className="text-danger">{formErrors["setNoDocErr"]}</span>
              </small>
            </div>
          </div>
          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Document Number &nbsp;:</label>{" "}
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <input
                type="text"
                placeholder="Enter Document Number"
                name={`document_no`}
                onChange={(e) => handleChange(e, "document_no")}
                value={idendityProof.document_no}
              />
            </div>
            <small>
              <span className="text-danger">{formErrors["setDocNoErr"]}</span>
            </small>
          </div>

          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Upload Document &nbsp;:</label>{" "}
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <div className="radios d-flex flex-wrap ">
                <input
                  type="file"
                  placeholder="Upload file"
                  // value={idendityProof.doc_image}
                  name="doc_image"
                  accept="image/png, image/gif, image/jpeg"
                  onChange={(e) => {
                    handleChange(e, "doc_image");
                    onFileUpload(e);
                  }}
                />
              </div>
            </div>
            <small>
              <span className="text-danger">
                {formErrors["setDocImageErr"]}
              </span>
            </small>
          </div>
        </div>
        <div className="container part-2 mt-2 ">
          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Issue date &nbsp;:</label>
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <div className="radios d-flex flex-wrap ">
                <input
                  type="date"
                  value={idendityProof.doc_issue_date}
                  name="doc_issue_date"
                  onChange={(e) => handleChange(e, "doc_issue_date")}
                />
              </div>
            </div>
            <small>
              <span className="text-danger">
                {formErrors["setDocIssueErr"]}
              </span>
            </small>
          </div>
          <div className="my-3 d-flex cc border justify-content-space-evenly">
            <div>
              <label className="my-3 mx-2">Exipiry date &nbsp;:</label>{" "}
              &nbsp;&nbsp;&nbsp;
            </div>
            <div className="my-3 dd">
              <div className="radios d-flex flex-wrap ">
                <input
                  type="date"
                  value={idendityProof.doc_exipiry_date}
                  onChange={(e) => handleChange(e, "doc_exipiry_date")}
                />
              </div>
            </div>
            <small>
              <span className="text-danger">{formErrors["setDocExpErr"]}</span>
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
          type="button"
          onClick={(e) => validateErrors()}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Step3;
