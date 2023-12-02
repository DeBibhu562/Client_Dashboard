import React, { useState } from "react";
import "./AccountsOverView.css";
import Popup from "./Popup";

import Delete from "../assets/DeleteOutline.png";
import More from "../assets/MoreVert.png";
import Plus from "../assets/plus.png";
import File from "../assets/FilePresent.png";
import Arrow from "../assets/arrows.png";

const AccountsOverView = ({showAccTable, setShowAccTable}) => {
  const [expandedRows, setExpandedRows] = useState([]);

  const handleRowClick = (index) => {
    const currentExpandedRows = [...expandedRows];
    const isRowCurrentlyExpanded = currentExpandedRows.includes(index);

    if (isRowCurrentlyExpanded) {
      const newExpandedRows = currentExpandedRows.filter((i) => i !== index);
      setExpandedRows(newExpandedRows);
    } else {
      const newExpandedRows = currentExpandedRows.concat(index);
      setExpandedRows(newExpandedRows);
    }
  };

  const isRowExpanded = (index) => {
    return expandedRows.includes(index);
  };

  return (
    <div className={showAccTable ? "active" : ""}>
        <div className="top-bar">
            <button className="export-btn"> <img alt="" src={Arrow} style={{paddingRight:"3px"}}/>Export</button>
            <input  placeholder="Search" type="search" className="Search"/>
            <button className="new-btn">NEW AGENCY</button>
        </div>
      
      <table className="main-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Name</th>
            <th>Trader Email</th>
            <th>Location</th>
            <th>Contract</th>
            <th>plan</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((row, index) => (
            <React.Fragment key={index}>
              <tr onClick={() => handleRowClick(index)}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Jordan Stevenson</td>
                <td className="email">goji@duwkuzmet.gh</td>
                <td>Switzerland</td>
                <td>Contract</td>
                <td>€ 120</td>
                <td>
                  <button className="btn-active">Active</button>
                </td>
                <td className="Actions">
                  <img alt="" src={Delete} />
                  <img alt="" src={More} />
                  <img alt="" src={Plus} />
                </td>
              </tr>
              {isRowExpanded(index) && (
                <tr className="expanded-row">
                  <td colSpan="8">
                    <table className="hide-table">
                      <thead>
                        <tr>
                          <th>
                            <input type="checkbox" />
                          </th>
                          <th>NAME</th>
                          <th>ROLE</th>
                          <th>PHONE</th>
                          <th>STATUS</th>
                          <th>FEES</th>
                          <th>DATE</th>
                          <th>FILE</th>
                          <th>ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>Nabeel Ashraf</td>
                          <td>Project Leader</td>
                          <td>+1 (837) 546-7238</td>
                          <td>
                            <button className="btn-Pending">Pending</button>
                          </td>
                          <td>30 PKR</td>
                          <td>01.10.2023</td>
                          <td>
                            <img alt="" src={File} />
                          </td>
                          <td>
                            <img alt="" src={More} />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input type="checkbox" />
                          </td>
                          <td>Zain Masood</td>
                          <td>Sales Partner</td>
                          <td>+1 (837) 546-7238</td>
                          <td>
                            <button className="btn-active">Active</button>
                          </td>
                          <td>50 PKR</td>
                          <td>01.10.2023</td>
                          <td>
                            <img alt="" src={File} />
                          </td>
                          <td>
                            <img alt="" src={More} />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      
      {showAccTable && <Popup closePopup={() => setShowAccTable(false)} />}
    </div>
  );
};

export default AccountsOverView;
