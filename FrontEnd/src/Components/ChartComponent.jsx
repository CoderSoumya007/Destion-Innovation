import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const data = [
  { name: 'Jan', users: 4000 },
  { name: 'Feb', users: 3000 },
  { name: 'Mar', users: 2000 },
  { name: 'Apr', users: 2780 },
  { name: 'May', users: 1890 },
  { name: 'Jun', users: 2390 },
  { name: 'Jul', users: 3490 },
];

const ChartComponent = () => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4">User Growth Over Time</h3>
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <CartesianGrid strokeDasharray="3 3" />
      <Legend />
      <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  </div>
);

export default ChartComponent;