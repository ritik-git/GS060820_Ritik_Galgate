import React, { useState } from "react";
import {  Line, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ComposedChart } from "recharts";
import { ChartData } from "../interfaces/Common";




// Generate mock data
const data: ChartData[] = Array.from({ length: 52 }, (_, i) => ({
  week: `W${String(i + 1).padStart(2, "0")}`,
  gmDollars: Math.floor(Math.random() * 200000) + 50000, // Random GM Dollars
  gmPercent: Math.random() * 60 + 10, // Random GM %
}));

const ChartsPage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("San Francisco Bay Trends");

  return (
    <div className="chart-container">
      {/* Dropdown */}
      <select className="dropdown" value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
        <option>San Francisco Bay Trends</option>
        <option>New York Trends</option>
        <option>Los Angeles Trends</option>
      </select>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data}>
          {/* X Axis */}
          <XAxis dataKey="week" stroke="white" />

          {/* Left Y Axis (GM Dollars) */}
          <YAxis yAxisId="left" stroke="white" tickFormatter={(value: number) => `$${value.toLocaleString()}`} />

          {/* Right Y Axis (GM %) */}
          <YAxis yAxisId="right" orientation="right" stroke="white" tickFormatter={(value: number) => `${value.toFixed(0)}%`} />

          <Tooltip formatter={(value: number, name: string) => (name === "GM Dollars" ? `$${value.toLocaleString()}` : `${value.toFixed(2)}%`)} />
          <Legend />

          {/* Bar for GM Dollars */}
          <Bar yAxisId="left" dataKey="gmDollars" fill="#4895EF" name="GM Dollars" />

          {/* Line for GM % */}
          <Line yAxisId="right" type="monotone" dataKey="gmPercent" stroke="#F77F00" strokeWidth={2} name="GM %" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartsPage;
