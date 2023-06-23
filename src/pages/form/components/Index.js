import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const Index = () => {
  const [formData, setFormData] = useState({
    currentStep: 1,
  });
  console.log("🚀 ~ file: Index.js:11 ~ Index ~ formData:", formData);
  const handleChange = (event) => {
    setFormData({
      currentStep: formData?.currentStep + 1,
    });
  };
  const [dynamicData, setDynamicData] = useState([
    {
      email: "aa",
      mobile: "234",
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
        email: "bb",
        mobile: "123",
      },
    ]);
  };

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
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default Index;
