import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Day 1', Registrations: 740, Referrals: 330 },
  { name: 'Day 2', Registrations: 700, Referrals: 310 },
  { name: 'Day 3', Registrations: 600, Referrals: 260 },
  { name: 'Day 4', Registrations: 520, Referrals: 210 },
  { name: 'Day 5', Registrations: 505, Referrals: 215 },
  { name: 'Day 6', Registrations: 550, Referrals: 220 },
  { name: 'Day 7', Registrations: 140, Referrals: 64 },
];

const LinearChart = () => {
  return (
    <div className="rounded-lg p-4 bg-gray-300">
      <h2 className="text-start text-black font-medium mb-4">
        Last 7 Days: Registrations vs Referrals
      </h2>
      <ResponsiveContainer width="100%" height={210}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#333" />
          <YAxis stroke="#333" />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="Registrations"
            stroke="rgb(99, 102, 241)"
            fill="rgba(99, 102, 241, 0.2)"
            strokeWidth={2}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Area
            type="monotone"
            dataKey="Referrals"
            stroke="rgb(239, 68, 68)"
            fill="rgba(239, 68, 68, 0.2)"
            strokeWidth={2}
            dot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LinearChart;

