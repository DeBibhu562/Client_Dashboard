import React from "react";
import "./Account.css";

const Accounts = () => {
  return (
    <div className="Accounts-main">
      <form className="form">
        <div className="form-row">
          <div className="from-col-div">
            <label className="form-label" htmlFor="agencyName">
              Agency Name
            </label>
            <input
              id="agencyName"
              placeholder="Agency Name"
              className="from-col1"
            />
          </div>
          <div className="from-col-div">
            <label className="form-label" htmlFor="userName">
              User Name
            </label>
            <input
              id="userName"
              placeholder="User Name"
              className="from-col2"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="from-col-div">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input id="email" placeholder="Email" className="from-col1" />
          </div>
          <div className="from-col-div">
            <label className="form-label" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              placeholder="Phone Number"
              className="from-col2"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="from-col-div">
            <label className="form-label" htmlFor="address">
              Address
            </label>
            <input id="address" placeholder="Address" className="from-col1" />
          </div>
          <div className="from-col-div">
            <label className="form-label" htmlFor="state">
              State
            </label>
            <input id="state" placeholder="State" className="from-col2" />
          </div>
        </div>
        <div className="form-row">
          <div className="from-col-div">
            <label className="form-label" htmlFor="zipCode">
              Zip Code
            </label>
            <input id="zipCode" placeholder="Zip Code" className="from-col1" />
          </div>
          <div className="from-col-div">
            <label className="form-label" htmlFor="country">
              Country
            </label>
            <input id="country" placeholder="Country" className="from-col2" />
          </div>
        </div>
        <div className="form-row">
          <div className="from-col-div">
            <label className="form-label" htmlFor="activeBranch">
              Active Branch
            </label>
            <input
              id="activeBranch"
              placeholder="Active Branch"
              className="from-col1"
            />
          </div>
          <div className="from-col-div">
            <label className="form-label" htmlFor="newField">
              New Field
            </label>
            <input
              id="newField"
              placeholder="New Field"
              className="from-col2"
            />
          </div>

        </div>
        <div className="btn-row">
          <button className="psd-btn">PROCEED</button>
          <button className="cnl-btn">CANCEL</button>
        </div>
      </form>
      <form className="form">
        <p className="DA-txt">Deactivate Account</p>
        <div className="agree">
          <input type="checkbox" />
          <p>I confirm account deactivation</p>
        </div>
        <button className="DA-btn">Deactivate Account</button>
      </form>

    </div>
  );
};

export default Accounts;
