import React from "react";

function SelectDataKey({ onChange }) {
  return (
    <>
      <label htmlFor='key-select'>Select a key for sorting: </label>
      <select id='key-select' onChange={onChange}>
        <option value='infectedCount'>Confirmed</option>
        <option value='intensiveCareCount'>IVA</option>
        <option value='deathCount'>Death</option>
      </select>
    </>
  );
}

export default SelectDataKey;
