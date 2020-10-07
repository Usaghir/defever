import React from 'react';
import '../../Components.css';

function SelectDataKey({ onChange }) {
  return (
    <div>
      <label htmlFor="key-select" className="font-weight-bold mr-3 ">
        Select a key for sorting{' '}
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
