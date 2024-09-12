'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const salesData = [
  {
    name: 'Apr',
    point: 4908,
    number: 2780,
    users: 367,
  },
  {
    name: 'May',
    point: 5800,
    number: 1890,
    users: 393,
  },
  {
    name: 'Jun',
    point: 3800,
    number: 2390,
    users: 314,
  },
  {
    name: 'Jul',
    point: 2800,
    number: 1290,
    users: 373,
  },
  {
    name: 'Aug',
    point: 6800,
    number: 3590,
    users: 351,
  },
];

const RechartsBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={200}
        data={salesData}
        margin={{
          right: 30,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="point" fill="#2563eb" />
        <Bar dataKey="number" fill="purple" />
        <Bar dataKey="users" fill="rgb(38 135 74)" />

      </BarChart>
    </ResponsiveContainer>
  );
};

export default RechartsBarChart;

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Points:
          <span className="ml-2">{payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          New Games:
          <span className="ml-2">{payload[1].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          New Users:
          <span className="ml-2">{payload[2].value}</span>
        </p>
      </div>
    );
  }
};