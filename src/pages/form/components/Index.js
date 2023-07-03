import React, { useCallback, useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { getLocalStorage, makeRandomId } from "../../../utils/helpers";
const Index = () => {
  const [editForm, setEditForm] = useState(false);
  const queryParams = new URLSearchParams(window.location.search);
  const userId = queryParams.get("id");
  const [editFormData, setEditFormData] = useState(null);

  const [formData, setFormData] = useState();

  useEffect(() => {
    if (userId) {
      setEditForm(true);
      const editData = JSON.parse(getLocalStorage("BankUser"));
      const index = editData.findIndex((item) => item.id === userId);
      if (index >= 0) {
        const allData = editData[index];
        const tempStore = { ...allData };
        setFormData({ ...allData, currentStep: 1, Edited: true });
      }
    } else {
      setFormData({
        id: makeRandomId(10),
        currentStep: 1,
      });
    }
  }, [userId]);

  //form in filling up mode....

  const handleChange = (event) => {
    setFormData({
      currentStep: formData?.currentStep + 1,
    });
  };

  const arr = Object.entries(
    formData?.Contact_Details ? formData?.Contact_Details : {}
  ).reduce((result, [key, value]) => {
    result[key] = value;
    return result;
  }, []);

  useEffect(() => {
    if (formData?.Contact_Details) {
      return setDynamicData(arr);
    } else {
      setDynamicData([
        {
          id: makeRandomId(10),
          email: "",
          mobile: "",
        },
      ]);
    }
  }, [formData]);

  const [dynamicData, setDynamicData] = useState();
  useEffect(() => {
    if (formData?.Idendity_Proof) {
      return setIdendityProof({ ...formData?.Idendity_Proof });
    } else {
      setIdendityProof({
        document_type: "Passport",
        document_no: "234234234",
        doc_image: "C:\\fakepath\\category-icon.png",
        doc_issue_date: "2022-11-11",
        doc_exipiry_date: "2023-06-16",
      });
    }
  }, [formData]);

  const [idendityProof, setIdendityProof] = useState();
  const HandleSubmit = (event) => {
    console.log("okay");
  };
  const handleAddMore = (e) => {
    e.preventDefault();
    setDynamicData([
      ...dynamicData,
      {
        id: makeRandomId(10),
        email: "jigar.joshi011@gmail.com",
        mobile: "80654544787",
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
  useEffect(() => {
    if (formData?.Address) {
      return setAddress({ ...formData?.Address });
    } else {
      setAddress({
        addType: "Registered Office",
        address: "abc",
        district: "abc",
        zip_Code: "23234234",
        address_location: "Permanent",
        Country: "india",
        State: "Goa",
        City_Village: "adc",
      });
    }
  }, [formData]);
  const [Address, setAddress] = useState();

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
