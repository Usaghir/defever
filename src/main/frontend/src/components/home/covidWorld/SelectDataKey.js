import React, { useContext } from 'react';
import { AppDispatch } from '../CovidWorld';

function SelectDataKey() {
  const dispatch = useContext(AppDispatch);

  function onChange(e) {
    dispatch({ type: 'SET_KEY', key: e.target.value });
  }

  return (
    <div className="text-center">
      <label className="font-weight-bold mr-3 " htmlFor="key-select">
        Choose{' '}
      </label>
      <select id="key-select" onChange={onChange} className="font-weight-bold">
        <option value="cases">Cases</option>
        <option value="todayCases">Today Cases</option>
        <option value="deaths">Death</option>
        <option value="recovered">Recovered</option>
        <option value="active">Active</option>
      </select>
    </div>
  );
}

export default SelectDataKey;
