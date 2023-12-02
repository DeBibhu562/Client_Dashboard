import React from "react";
import "./Preview.css";
import copy from "../assets/copy.png";

const Preview = () => {
  return (
    <div>
      <div className="preview-div">
        <div>
          <h4 className="priview-title-sm">ABOUT</h4>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>Agency Name</span>: Flitz
          </p>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>User Name</span>: Johndoe
          </p>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>Status</span>: Active
          </p>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>Role</span>: Developer
          </p>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>Address</span>: 123 Main St. New
            York, NY 1001
          </p>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>Zip</span>: 634880
          </p>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>State</span>: New York
          </p>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>Country</span>: USA{" "}
          </p>
        </div>
        <div>
          <h4 className="priview-title-sm">CONTACTS</h4>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>Contact:</span> (123) 456-7890
          </p>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>Email:</span> john.doe@example.com
          </p>
        </div>
        <div>
          <h4 className="priview-title-sm">TEAM</h4>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>Agency Manager</span> 15
          </p>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>Project leader</span> 30
          </p>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>Sub Agency Admin</span> 30
          </p>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>Sales Partner</span> 15
          </p>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>Backoffice </span> 15
          </p>
        </div>
        <div>
          <h4 className="priview-title-sm">Features</h4>
          <div className="priview-check">
            <input type="checkbox" name="Contract Based Payment" id="" />
            <label htmlFor="">
              <b className="priview-txt" style={{ fontWeight: 600 }}>
                Address Management
              </b>
            </label>
          </div>
          <div className="priview-check">
            <input type="checkbox" name="Contract Based Payment" id="" />
            <label htmlFor="">
              <b className="priview-txt" style={{ fontWeight: 600 }}>
                Academy
              </b>
            </label>
          </div>

          <h5 className="priview-title-sm">SUB FEATURES</h5>
          <div className="priview-check">
            <input type="checkbox" name="Contract Based Payment" id="" />
            <label htmlFor="">
              <b className="priview-txt" style={{ fontWeight: 600 }}>
                Navigation
              </b>
            </label>
          </div>
          <div className="priview-check">
            <input type="checkbox" name="Contract Based Payment" id="" />
            <label htmlFor="">
              <b className="priview-txt" style={{ fontWeight: 600 }}>
                Maps
              </b>
            </label>
          </div>
        </div>
        <div>
          <h4 className="priview-title-sm">CONTRACT</h4>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>Contract duration:</span> 24 month
          </p>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>Number of Workers :</span> 67{" "}
          </p>
        </div>
        <div>
          <h4 className="priview-title-sm">CREDENTIALS</h4>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>Email </span>{" "}
            <span className="link">JohnDoe@gmail.com </span>{" "}
            <span>
              <img className="Copy-img" src={copy} alt="" />
            </span>
          </p>
          <p className="priview-txt">
            <span style={{ fontWeight: 600 }}>Password </span>
            <span className="link">89534537</span>{" "}
            <span>
              <img className="Copy-img" src={copy} alt="" />
            </span>
          </p>
        </div>
        <button className="CA-btn">Create Account</button>
      </div>
    </div>
  );
};

export default Preview;
