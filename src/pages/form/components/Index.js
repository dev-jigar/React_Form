import React, { useCallback, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { makeRandomId } from "../../../utils/helpers";
const Index = () => {
  const [formData, setFormData] = useState({
    id: makeRandomId(10),
    currentStep: 1,
  });
  const handleChange = (event) => {
    setFormData({
      currentStep: formData?.currentStep + 1,
    });
  };
  const [dynamicData, setDynamicData] = useState([
    {
      id: makeRandomId(10),
      email: "",
      mobile: "",
    },
  ]);
  const [idendityProof, setIdendityProof] = useState({
    document_type: "",
    document_no: "",
    doc_image: "",
    doc_issue_date: "",
    doc_exipiry_date: "",
  });
  const HandleSubmit = (event) => {
    console.log("okay");
  };
  const handleAddMore = (e) => {
    e.preventDefault();
    setDynamicData([
      ...dynamicData,
      {
        id: makeRandomId(10),
        email: "",
        mobile: "",
      },
    ]);
  };
  const handleDel = useCallback(
    (e, id) => {
      e.preventDefault();
      if (id > -1) {
        dynamicData.splice(id, 1);
      }
    },
    [dynamicData, Step2]
  );
  const [Address, setAddress] = useState({
    addType: "",
    address: "",
    district: "",
    zip_Code: "",
    address_location: "",
    Country: "",
    State: "",
    City_Village: "",
  });

  return (
    <div>
      <div className="container">
        <form className="border mt-3">
          <h2 className="container mt-3">Create Bank Account </h2>
          {formData?.currentStep === 1 && (
            <Step1
              currentStep={formData.currentStep}
              handleChange={handleChange}
              setFormData={setFormData}
              formData={formData}
            />
          )}
          {formData?.currentStep === 2 && (
            <Step2
              dynamicData={dynamicData}
              setDynamicData={setDynamicData}
              currentStep={formData.currentStep}
              handleChange={handleChange}
              handleAddMore={handleAddMore}
              formData={formData}
              setFormData={setFormData}
            />
          )}
          {formData?.currentStep === 3 && (
            <Step3
              currentStep={formData.currentStep}
              handleChange={handleChange}
              formData={formData}
              setFormData={setFormData}
              idendityProof={idendityProof}
              setIdendityProof={setIdendityProof}
            />
          )}
          {formData?.currentStep === 4 && (
            <Step4
              currentStep={formData.currentStep}
              onSubmit={HandleSubmit}
              formData={formData}
              setFormData={setFormData}
              Address={Address}
              setAddress={setAddress}
            />
          )}
        </form>
      </div>
    </div>
  );
};
export default Index;
