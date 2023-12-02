import React, { useState } from "react";
import Popup from "./Popup";
import Settings from "../assets/setting-2.png";
import "./Setting.css";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

const Setting = ({ showPopup, setShowPopup }) => {
  return (
    <div className={showPopup ? "Setting-main active" : "Setting-main"}>
      <div className="Leftbar">
        <p className="Setting-title">Setting</p>
        <div className="Sidebar-feature">
          <img alt="" src={Settings} className="feature-img sidebar-img" />
          <span className="text">Settings</span>
        </div>
      </div>
      <div className="rightbar">
        <p className="Theme-title">Theme</p>
        <div className="theme-div">
          <div className="light-theme">
            <div className="lightleft">
              <BsSun className="themelogo" />
              <p>Light</p>
            </div>
            <input type="checkbox" />
          </div>
          <div className="Dark-theme">
            <div className="lightleft">
              <BsMoon className="themelogo" />
              <p>Dark</p>
            </div>
            <input type="checkbox" />
          </div>
        </div>
        <div className="lowerbar">
          <div className="Tax-div">
            <p className="Tax-txt">Tax</p>
            <input className="Tax-input" />
            <p className="Tax-txt">Currency</p>
            <select className="Tax-input">
              <option>United State Doller $</option>
              <option>European Euro #</option>
            </select>
          </div>
          <div className="Language-div">
            <p className="Tax-txt">Language</p>
            <select className="Language-input">
              <option className="drop-option">English(United State)</option>
              <option className="drop-option">English(United State)</option>
              <option className="drop-option">English(United State)</option>
              <option className="drop-option">English(United State)</option>
              <option className="drop-option">English(United State)</option>
              <option className="drop-option">English(United State)</option>
              <option className="drop-option">English(United State)</option>
            </select>
          </div>
        </div>
      </div>
      {showPopup && <Popup closePopup={() => setShowPopup(false)} />}
    </div>
  );
};

export default Setting;
