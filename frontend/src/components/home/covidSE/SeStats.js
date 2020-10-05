import React from 'react';
import '../../Components.css';

function Stat({ number, color }) {
  return <span style={{ color: color, fontWeight: 'bold' }}>{number}</span>;
}

function SeStats({ stats }) {
  const { cases, deaths, recovered, active, updated } = stats;

  return (
    <div className="global-stats">
      <small>Updated on {new Date(updated).toLocaleString()}</small>
      <table>
        <tr className="  bebas-font">
          <td>
            Cases: <Stat number={cases} color="grey" />
          </td>
          <td>
            Deaths: <Stat number={deaths} color="red" />
          </td>
          <td>
            Recovered: <Stat number={'N/A'} color="green" />
          </td>
          <td>
            Active: <Stat number={active} color="orange" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default SeStats;
