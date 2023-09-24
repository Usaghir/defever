import React from 'react';
import PropTypes from 'prop-types'; // Import the prop-types library
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

function RegionsChart({ data, dataKey }) {
  return (
    <ResponsiveContainer width="95%" height={300}>
      <BarChart
        data={data}
        margin={{ top: 5, right: 10, left: 20, bottom: 5 }}
        className="bebas-font"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="region" dy={20} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={dataKey} fill="#0C2C54" />
      </BarChart>
    </ResponsiveContainer>
  );
}

// Define prop types for the component
RegionsChart.propTypes = {
  data: PropTypes.array.isRequired, // Assumes data is an array, adjust the type accordingly
  dataKey: PropTypes.string.isRequired, // Assumes dataKey is a string, adjust the type accordingly
};

export default RegionsChart;
