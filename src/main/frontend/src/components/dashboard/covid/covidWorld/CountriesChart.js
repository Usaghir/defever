import React, { useContext } from 'react';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
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
    <ResponsiveContainer width="95%" height={300}>
      <BarChart
        data={data}
        onClick={onClick}
        margin={{ top: 5, right: 10, left: 40, bottom: 5 }}
        className=" bebas-font"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="country" dy={20} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={dataKey} fill="#0C2C54" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CountriesChart;
