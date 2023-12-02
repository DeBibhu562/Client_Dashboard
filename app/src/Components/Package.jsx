import React, { useState } from "react";
import "./Package.css";
import circlearrow from "../assets/circlearrows.png";

const Package = () => {
  const [numberOfContracts, setNumberOfContracts] = useState("");
  const [fees, setFees] = useState("");
  const [field, setField] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleNumberOfContractsChange = (e) => {
    setNumberOfContracts(e.target.value);
  };

  const handleFeesChange = (e) => {
    setFees(e.target.value);
  };

  const handleFieldChange = (e) => {
    setField(e.target.value);
  };
  return (
    <>
      <p className="package-title">Tariffs</p>
      <div className="form-Package">
        <div className="left-form">
          <form>
            <div className="package-check">
              <input
                type="checkbox"
                name="Contract Based Payment"
                id=""
                className="package-form-input"
              />
              <h4 className="package-form-title">Contract Based Payment</h4>
            </div>
            <h4 className="packege-label"> Agency Manager</h4>
            <div className="input-group">
              <div className="packege-from-col-div">
                <label className="packege-form-label" htmlFor="agencyName">
                  Number Of Contracts
                </label>
                <input
                  type="text"
                  name="Number of Contracts"
                  placeholder="Input 1"
                  className="packege-half-input"
                />
              </div>
              <div className="packege-from-col-div">
                <label className="packege-form-label" htmlFor="userName">
                  Fees
                </label>
                <input
                  type="text"
                  name="Fees"
                  placeholder="Input 2"
                  className="packege-half-input"
                />
              </div>
            </div>
            <div className="packege-from-col-div">
              <label className="full-packege-form-label" htmlFor="agencyName">
                New Field
              </label>
              <input
                type="text"
                name="New Field"
                className="package-full-input"
                placeholder=""
              />
              <img src={circlearrow} alt="" className="circlearrows" />
            </div>
            <h4 className="packege-label">Back Office</h4>
            <div className="input-group">
              <div className="packege-from-col-div">
                <label className="packege-form-label" htmlFor="agencyName">
                  Number Of Contracts
                </label>
                <input
                  type="text"
                  name="Number of Contracts"
                  placeholder="Input 1"
                  className="packege-half-input"
                />
              </div>
              <div className="packege-from-col-div">
                <label className="packege-form-label" htmlFor="userName">
                  Fees
                </label>
                <input
                  type="text"
                  name="Fees"
                  placeholder="Input 2"
                  className="packege-half-input"
                />
              </div>
            </div>
            <div className="packege-from-col-div">
              <label className="full-packege-form-label" htmlFor="agencyName">
                New Field
              </label>
              <input
                type="text"
                name="New Field"
                className="package-full-input"
                placeholder=""
              />
              <img src={circlearrow} alt="" className="circlearrows" />
            </div>
            <h4 className="packege-label">Project Leader</h4>
            <div className="input-group">
              <div className="packege-from-col-div">
                <label className="packege-form-label" htmlFor="agencyName">
                  Number Of Contracts
                </label>
                <input
                  type="text"
                  name="Number of Contracts"
                  placeholder="Input 1"
                  className="packege-half-input"
                />
              </div>
              <div className="packege-from-col-div">
                <label className="packege-form-label" htmlFor="userName">
                  Fees
                </label>
                <input
                  type="text"
                  name="Fees"
                  placeholder="Input 2"
                  className="packege-half-input"
                />
              </div>
            </div>
            <div className="packege-from-col-div">
              <label className="full-packege-form-label" htmlFor="agencyName">
                New Field
              </label>
              <input
                type="text"
                name="New Field"
                className="package-full-input"
                placeholder=""
              />
              <img src={circlearrow} alt="" className="circlearrows" />
            </div>
            <h4 className="packege-label">Sub Agency Manager</h4>
            <div className="input-group">
              <div className="packege-from-col-div">
                <label className="packege-form-label" htmlFor="agencyName">
                  Number Of Contracts
                </label>
                <input
                  type="text"
                  name="Number of Contracts"
                  placeholder="Input 1"
                  className="packege-half-input"
                />
              </div>
              <div className="packege-from-col-div">
                <label className="packege-form-label" htmlFor="userName">
                  Fees
                </label>
                <input
                  type="text"
                  name="Fees"
                  placeholder="Input 2"
                  className="packege-half-input"
                />
              </div>
            </div>
            <div className="packege-from-col-div">
              <label className="full-packege-form-label" htmlFor="agencyName">
                New Field
              </label>
              <input
                type="text"
                name="New Field"
                className="package-full-input"
                placeholder=""
              />
              <img src={circlearrow} alt="" className="circlearrows" />
            </div>
            <h4 className="packege-label">Sales Partner</h4>
            <div className="input-group">
              <div className="packege-from-col-div">
                <label className="packege-form-label" htmlFor="agencyName">
                  Number Of Contracts
                </label>
                <input
                  type="text"
                  name="Number of Contracts"
                  placeholder="Input 1"
                  className="packege-half-input"
                />
              </div>
              <div className="packege-from-col-div">
                <label className="packege-form-label" htmlFor="userName">
                  Fees
                </label>
                <input
                  type="text"
                  name="Fees"
                  placeholder="Input 2"
                  className="packege-half-input"
                />
              </div>
            </div>
            <div className="packege-from-col-div">
              <label className="full-packege-form-label" htmlFor="agencyName">
                New Field
              </label>
              <input
                type="text"
                name="New Field"
                className="package-full-input"
                placeholder=""
              />
              <img src={circlearrow} alt="" className="circlearrows" />
            </div>
          </form>
        </div>

        {/* Right Form */}
        <div className="right-form">
          <form>
            <div className="package-check">
              <input type="checkbox" name="Fixed Payment" id="" />
              <h4 className="package-form-title">Fixed Payment</h4>
            </div>
            <div>
              <h4 htmlFor="firstName" className="packege-label">
                Agency Manager:
              </h4>
              <div className="packege-from-col-div">
                <label className="full-packege-form-label">FEES</label>
                <input
                  className="right-input"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                />
              </div>
            </div>

            <div>
              <h4 htmlFor="lastName" className="packege-label">
                Back Office :
              </h4>
              <div className="packege-from-col-div">
                <label className="full-packege-form-label">FEES</label>
                <input
                  className="right-input"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                />
              </div>
            </div>

            <div>
              <h4 htmlFor="email" className="packege-label">
                Project Leader:
              </h4>
              <div className="packege-from-col-div">
                <label className="full-packege-form-label">FEES</label>
                <input
                  className="right-input"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                />
              </div>
            </div>

            <div>
              <h4 htmlFor="phone" className="packege-label">
                Sub Agency Manager:
              </h4>
              <div className="packege-from-col-div">
                <label className="full-packege-form-label">FEES</label>
                <input
                  className="right-input"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                />
              </div>
            </div>

            <div>
              <h4 htmlFor="message" className="packege-label">
                Sales Partner:
              </h4>
              <div className="packege-from-col-div">
                <label className="full-packege-form-label">FEES</label>
                <input
                  className="right-input"
                  type="tel"
                  id="message"
                  name="message"
                  value={formData.message}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <p className="package-title">Features</p>
    </>
  );
};

export default Package;
