import React from 'react';
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

function RegionsChart({ data, dataKey }) {
  return (
    <BarChart
      width={1000}
      height={400}
      data={data}
      className="font-weight-bold bebas-font ml-5 font-sm "
    >
      <CartesianGrid strokeDasharray="3 3" />

      <XAxis dataKey="region" dy={20} />

      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={dataKey} fill="#0C2C54" />
    </BarChart>
  );
}

export default RegionsChart;
