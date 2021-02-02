import React from 'react';
import {
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  } from 'recharts';

import { weatherData } from '../data/_barData'


const BarExample = () => {

  return (
    <BarChart
      width={500}
      height={300}
      data={weatherData}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
      <YAxis /> 
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
    </BarChart>
  );
}

export default BarExample