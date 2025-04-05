"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan 1",
    views: 240,
    leads: 12,
  },
  {
    name: "Jan 5",
    views: 280,
    leads: 14,
  },
  {
    name: "Jan 10",
    views: 320,
    leads: 18,
  },
  {
    name: "Jan 15",
    views: 350,
    leads: 22,
  },
  {
    name: "Jan 20",
    views: 410,
    leads: 26,
  },
  {
    name: "Jan 25",
    views: 490,
    leads: 32,
  },
  {
    name: "Jan 30",
    views: 520,
    leads: 36,
  },
];

export function PerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="views"
          stroke="#adfa1d"
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="leads"
          stroke="#0ea5e9"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
