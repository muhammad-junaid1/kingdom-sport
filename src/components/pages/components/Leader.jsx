import React from "react";
import "../css/Leader.css";

const Leader = ({
  id,
  avatar,
  userID,
  bestBet,
  won,
  lose,
  result,
  resultPercent,
}) => {
  return (
    <>
      <tr>
        <td>
          <div className={`number${id <= 3 ? " icon" : ""}`}>
            {id <= 3 && (
              <img src={require(`../../../assets/verify_${id}.png`)} alt="" />
            )}
            {(id > 3) && <p>{id}</p>}
          </div>
        </td>
        <td>
          <div className="your-bet-label">
            <img
              src={require(`../../../assets/avatars/${avatar}.png`)}
              alt=""
            />
            <span>{userID}</span>
          </div>
        </td>
        <td>
          <div className="best-bet">
            <p>{bestBet}</p>
          </div>
        </td>
        <td>{won}</td>
        <td>{lose}</td>
        <td>
          <div className="result">
            <p>{result}</p>
            <div className="percentage">
              <p>{resultPercent}</p>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Leader;
