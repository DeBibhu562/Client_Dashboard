import React, { useState } from "react";
import "./Mainpage.css";
import Package from "../Components/Package";
import Contract from "../Components/Contract";
import Preview from "../Components/Preview";
import Accounts from "../Components/Accounts";

export const Mainpage = () => {
  const [accountTog, setAccountTog] = useState(true);
  const [packageTog, setPackageTog] = useState(false);
  const [contactTog, setContactTog] = useState(false);
  const [previewTog, setPreviewTog] = useState(false);

  const handleAccount = () => {
    setAccountTog(true);
    setPackageTog(false);
    setContactTog(false);
    setPreviewTog(false);
  };

  const handlePackage = () => {
    setAccountTog(false);
    setPackageTog(true);
    setContactTog(false);
    setPreviewTog(false);
  };

  const handleContact = () => {
    setAccountTog(false);
    setPackageTog(false);
    setContactTog(true);
    setPreviewTog(false);
  };

  const handlePreview = () => {
    setAccountTog(false);
    setPackageTog(false);
    setContactTog(false);
    setPreviewTog(true);
  };

  return (
    <>
      <div className="MainPage-div">
        <div className="btn-div" >
          <button onClick={handleAccount} className="page-btn">
            Accounts
          </button>
          <button onClick={handlePackage} className="page-btn">
            Package
          </button>
          <button onClick={handleContact} className="page-btn">
            Contact
          </button>
          <button onClick={handlePreview} className="page-btn">
            Preview
          </button>
        </div>
      </div>
      {accountTog && <Accounts />}
      {packageTog && <Package />}
      {contactTog && <Contract />}
      {previewTog && <Preview />}
    </>
  );
};