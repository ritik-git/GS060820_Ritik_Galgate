import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Box, Typography } from "@mui/material";

const data = [
  { week: "Week 1", gmDollars: 500, gmPercentage: 40 },
  { week: "Week 2", gmDollars: 300, gmPercentage: 25 },
];

const ChartsPage = () => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h4" gutterBottom>
      GM Dollars & GM% Chart
    </Typography>
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="week" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="gmDollars" fill="#8884d8" />
      <Bar dataKey="gmPercentage" fill="#82ca9d" />
    </BarChart>
  </Box>
);

export default ChartsPage;
