import React from 'react';
import {
  PieChart, Pie, Tooltip, Cell,
} from 'recharts';

import { AGE_GROUP } from '../data/_pieData'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN) - 10;
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieExample = () => {

  return (
    <PieChart width={400} height={400}>
      <Tooltip 
        cursor={false}
        formatter={(value, name) => [`${value}%`, `Age ${name}`]}
      />
      <Pie
        data={AGE_GROUP}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        fill="#8884d8"
        name="Percentage"
        nameKey="age"
        unit="%"
        dataKey="percentage"
        outerRadius={100}
        innerRadius={40}
      >
        {
          AGE_GROUP.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
    </PieChart>
  );
}

export default PieExample
