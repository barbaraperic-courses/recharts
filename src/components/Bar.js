import React from 'react';
import {
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  ResponsiveContainer,
  } from 'recharts';

import { weatherData } from '../data/_barData'
import { getMonthNameByOrder } from '../utils/month-mapping' 


const BarExample = () => {

  return (
    <ResponsiveContainer width="70%" height={200}>
      <BarChart
        width={500}
        height={300}
        data={weatherData}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
        barSize={20}
      >
        <XAxis 
          dataKey="month" 
          scale="point" 
          padding={{ left: 10, right: 10 }}
          tickFormatter={getMonthNameByOrder}
          tickLine={false}
        />
        <YAxis 
          dataKey="rainfall" 
          unit="ml"
          axisLine={false}
          width={35}
        /> 
        <Tooltip labelFormatter={getMonthNameByOrder} cursor={false}/>
        {/* <Legend /> */}
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <Bar 
          dataKey="rainfall"
          name="Rainfall"
          unit="ml" 
          fill="#8884d8" 
          background={{ fill: '#eee' }} 
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarExample