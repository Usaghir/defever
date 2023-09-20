import React from 'react';

function Stat({ number, color }) {
  return <span style={{ color: color, fontWeight: 'bold' }}>{number}</span>;
}

function SeStats({ stats }) {
  const { cases, deaths, recovered, active, updated } = stats;

  return (
    <div className="global-stats text-center mar-l-r">
      <small>Updated on {new Date(updated).toLocaleString()}</small>
      <table>
        <tbody>
          <tr className="  bebas-font">
            <td>
              Cases: <Stat number={cases} color="grey" />
            </td>
            <td>
              Deaths: <Stat number={deaths} color="red" />
            </td>
            <td>
              Recovered: <Stat number={recovered ? recovered : 'N/A'} color="green" />
            </td>
            <td>
              Active: <Stat number={active} color="orange" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SeStats;
