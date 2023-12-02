import React from "react";
import "./Contract.css";
import circlearrow from "../assets/circlearrows.png";

const Contract = () => {
  return (
    <>
      <div className="Contract-div">
        <div className="Contract-input-group">
          <div className="Contract-from-col-div">
            <label className="Contract-form-label" htmlFor="agencyName">
            Contract duration
            </label>
            <input
              type="text"
              name="Number of Contracts"
              placeholder="Enter duration"
              className="Contract-half-input"
            />
          </div>
          <div className="Contract-from-col-div">
            <label className="Contract-form-label" htmlFor="userName">
            Number of Workers
            </label>
            <input
              type="text"
              name="Fees"
              placeholder="Workers"
              className="Contract-half-input"
            />
          </div>
        </div>
        <div className="Contract-from-col-div">
          <label className="full-Contract-form-label" htmlFor="agencyName">
            New Field
          </label>
          <input
            type="text"
            name="New Field"
            className="Contract-full-input"
            placeholder=""
          />
          <img src={circlearrow} alt="" className="circleplus" />
        </div>

        <div className="button-div">
          <button className="proceed-btn">Proceed</button>
          <button className="cancel-btn">Cancel</button>
        </div>
      </div>
    </>
  );
};

export default Contract;
