import React from "react";

const YourBetsRow = ({
  id,
  result,
  amount,
  winloseAmount,
  match,
  coef,
  dateTime,
  withdrawl,
}) => {
  return (
    <>
      <tr>
        <td>
        <div className="id">
            <p>{id}</p>
        </div>
        </td>
        <td>
            <div className={`result ${result}`}>
              <p>{result.charAt(0).toUpperCase() + result.slice(1)}</p>
            </div>
        </td>
        <td>
          <div className="amount">
          <div>
            <p>{amount[0]}</p>
            <p className="amount--pool">
              Pool: <span>{amount[1]}</span>
            </p>
            </div>
          </div>
        </td>
        <td>
          <div>
          {!(result === "active") &&
            <p className={`amount--${result}`}>{winloseAmount}</p>
          }
          </div>
        </td>
        <td>
            <div className="match-teams">
              <p>{match.teamA}</p>
              <span>VS</span>
              <p>{match.teamB}</p>
            </div>
        </td>
        <td>
                <div className="coef">
                    <p>{coef}</p>
                </div>
        </td>
        <td>
            <div className="dateTime">
            <div>
                <p>{dateTime[0]}</p>
                <p>{dateTime[1]}</p>
                </div>
                </div>
        </td>
        <td>
            <div>
            {result === "win" &&
                <p className="withdrawl">{withdrawl}</p>
            }
            </div>
        </td>
      </tr>
    </>
  );
};

export default YourBetsRow;
