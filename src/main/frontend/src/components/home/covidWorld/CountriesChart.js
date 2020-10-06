import React, { useContext } from 'react';
import '../../Components.css';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from 'recharts';
import { AppDispatch } from '../CovidWorld';

function CountriesChart({ data, dataKey }) {
  const dispatch = useContext(AppDispatch);

  function onClick(payload = {}) {
    if (payload.activeLabel) {
      dispatch({ type: 'SET_COUNTRY', country: payload.activeLabel });
    }
  }

  return (
    <BarChart
      width={1000}
      height={400}
      data={data}
      onClick={onClick}
      className="font-weight-bold bebas-font ml-5 font-sm"
    >
      <CartesianGrid strokeDasharray="3 3" className="mb-5" />
      <XAxis dataKey="country" dy={20} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={dataKey} fill="#0C2C54" />
    </BarChart>
  );
}

export default CountriesChart;
