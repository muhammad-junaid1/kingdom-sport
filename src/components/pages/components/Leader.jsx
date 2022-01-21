import React from "react";
import "../css/Leader.css";

const Leader = () => {
  return (
    <>
      <tr>
        <td>
            <div className="number">1</div>
        </td>
        <td>
          <div className="your-bet-label">
              <img src={require("../../../assets/avatar.png")} alt="" />
              <span>0xe1B233535...5c00</span>
          </div>
        </td>
        <td><div className="best-bet"> <p>2,342,400.00 DBSC</p></div></td>
        <td>0</td>
        <td>1</td>
        <td>
          <div className="result">
            <p>2,342,400.00 DBSC</p>
            <div className="percentage">
                <p>9437.29%</p>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
  }

export default Leader;
