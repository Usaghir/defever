import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

function RegionsChart({ data, dataKey }) {
  return (
    <BarChart
      width={1000}
      height={250}
      style={{ margin: "auto" }}
      margin={{ top: 30, left: 20, right: 30 }}
      data={data}
      className =""
      
  
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='region' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={dataKey} fill='#8884d8' />
    </BarChart>
  );
}

export default RegionsChart;
