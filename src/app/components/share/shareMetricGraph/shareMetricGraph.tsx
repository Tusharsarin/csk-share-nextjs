"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Oct", share: 218 },
  { name: "Nov", share: 210 },
  { name: "Dec", share: 196 },
  { name: "Jan", share: 188 },
];

const shareValues: number[] = data.map((entry) => entry.share);
const minValue: number = Math.min(...shareValues);
const maxValue: number = Math.max(...shareValues);

const dataRange = maxValue - minValue;
const buffer = dataRange < 20 ? 10 : Math.floor(dataRange * 0.1);

const roundedMin: number = Math.floor((minValue - buffer) / 5) * 5;
const roundedMax: number = Math.ceil((maxValue + buffer) / 5) * 5;

export default function ShareMetricGraph() {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <div
        style={{
          textAlign: "center",
          fontWeight: 600,
          fontSize: "30px",
          marginBottom: "20px",
        }}
      ></div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
          }}
        >
          <CartesianGrid strokeDasharray="0 0" />
          <XAxis dataKey="name" />
          <YAxis domain={[roundedMin, roundedMax]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="share"
            stroke="#34c759"
            strokeWidth={2}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
