import React from 'react';

function SelectDataKey({ onChange }) {
  return (
    <div className="text-center">
      <label htmlFor="key-select " className="  mr-3 font-weight-bold ">
        Choose{' '}
      </label>
      <select id="key-select" onChange={onChange} className="font-weight-bold">
        <option value="infectedCount">Cases</option>
        <option value="intensiveCareCount">Critical</option>
        <option value="deathCount">Death</option>
      </select>
    </div>
  );
}

export default SelectDataKey;
