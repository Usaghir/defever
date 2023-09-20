import React from 'react';

import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts';

const TITLE2COLOR = {
  Cases: '#4A4A4A',
  Deaths: '#D0021B',
  Recovered: '#09C79C',
};

function HistoryChart({ title, data, lastDays, onLastDaysChange }) {
  const colorKey = `color${title}`;
  const color = TITLE2COLOR[title];

  return (
    <div className="">
      <ResponsiveContainer width="100%" height={150}>
        <AreaChart
          data={data.slice(-lastDays)}
          margin={{ top: 10, right: 30, left: 10, bottom: 0 }}
        >
          <defs>
            <linearGradient id={colorKey} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.8} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="number"
            stroke={color}
            fillOpacity={1}
            fill={`url(#${colorKey})`}
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className=" bg-light pl-3 pb-2 w-100">
        <h6>{title}</h6>
        <input
          type="range"
          min="1"
          max="30"
          value={lastDays}
          onChange={onLastDaysChange}
          className="w-50"
        />
        <p className="">Last {lastDays} days</p>
      </div>
    </div>
  );
}

export default HistoryChart;
