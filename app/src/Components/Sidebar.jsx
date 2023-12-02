import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../assets/Logo.png";
import Dashboard from "../assets/element-1.png";
import Notification from "../assets/notification.png";
import Agencies from "../assets/abstract-28.png";
import Companies from "../assets/abstract-29.png";
import Employees from "../assets/people.png";
import Logout from "../assets/exit-right.png";
import Settings from "../assets/setting-2.png";
import Setting from "./Setting";
import AccountsOverView from "./AccountsOverView";

const Sidebar = ({handleMainAcc,setMainAccTog,mainAccTog}) => {


  const [sidebarActive, setSidebarActive] = useState(false);
  const [DropdownActive, setDropdownActive] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showAccTable, setShowAccTable] = useState(false);

  handleMainAcc = () => {
    setMainAccTog(!mainAccTog);
  };

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
    setDropdownActive(false);
  };
  const toggleDropdown = () => {
    setDropdownActive(!DropdownActive);
  };
  const togglePopUp = () => {
    setShowPopup(!showPopup);
  };
  const toggleAccTable = () => {
    setShowAccTable(!showAccTable);
    setMainAccTog(false)
  };


  return (
    <>
      <div className={`Sidebar ${sidebarActive ? "active" : ""}`}>
        <div className="Sidebar-logo" onClick={toggleSidebar}>
          <img alt="" src={Logo} className="logo-img" />
          <span
            className={sidebarActive ? "Show" : "Hide"}
            style={{ fontSize: "1.2rem", fontWeight: "700", marginLeft: "5px", marginTop:"15px" }}
          >
            TEONS
          </span>
        </div>
        <div className="Sidebar-Options">
          <div className="Sidebar-Option">
            <img alt="" src={Dashboard} className="sidebar-img" />
            <span className={sidebarActive ? "Show" : "Hide"}>Dashboard</span>
          </div>
          <div className="Sidebar-Option">
            <img alt="" src={Notification} className="sidebar-img" />
            <span className={sidebarActive ? "Show" : "Hide"}>
              Notifications
            </span>
          </div>
          <div className="Sidebar-Option" onClick={toggleDropdown}>
            <img alt="" src={Agencies} className="sidebar-img" />
            <div className="dropdown">
              <span className={sidebarActive ? "Show" : "Hide"}>Agencies</span>
              <ul
                className={`text Dropdown ${DropdownActive ? "Show" : "Hide"}`}
              >
                <li onClick={toggleAccTable}>Accounts Overview</li>
                <li onClick={()=>(handleMainAcc(true), setShowAccTable(false)) }> Account
                  
                </li>
              </ul>
            </div>
          </div>
          <div className="Sidebar-Option" onClick={toggleDropdown}>
            <img alt="" src={Companies} className="sidebar-img" />
            <div className="dropdown">
              <span className={sidebarActive ? "Show" : "Hide"}>Companies</span>
              <ul
                className={`text Dropdown ${DropdownActive ? "Show" : "Hide"}`}
              >
                <li onClick={toggleAccTable}>Accounts Overview</li>
                <li>New Account</li>
              </ul>
            </div>
          </div>
          <div className="Sidebar-Option">
            <img alt="" src={Employees} className="sidebar-img" />
            <span className={sidebarActive ? "Show" : "Hide"}>Employees</span>
          </div>
        </div>
        <div className="Sidebar-features">
          <div className="Sidebar-feature">
            <img alt="" src={Logout} className="feature-img sidebar-img" />
            <span className={sidebarActive ? "Show" : "Hide"}>Logout</span>
          </div>
          <div className="Sidebar-feature" onClick={togglePopUp}>
            <img alt="" src={Settings} className="feature-img sidebar-img" />
            <span className={sidebarActive ? "Show" : "Hide"}>Settings</span>
          </div>
        </div>
      </div>
      {showPopup && (
        <Setting showPopup={showPopup} setShowPopup={setShowPopup} />
      )}
    </>
  );
};

export default Sidebar;