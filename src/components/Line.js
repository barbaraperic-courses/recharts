import React from 'react';
import {
  LineChart,
  Line,
  XAxis, 
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { tempData } from '../data/_lineData'
import { getMonthNameByOrder } from '../utils/month-mapping'

const LineExample = () => {

  return (
    <LineChart
      width={500}
      height={300}
      data={tempData}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" tickFormatter={getMonthNameByOrder}/>
      <YAxis dataKey="temp" unit="C"/>
      <Tooltip 
        labelFormatter={getMonthNameByOrder}

      />
      <Line  
        type="monotone"
        name="Temperature"
        unit="C"
        dataKey="temp" 
        stroke="#8884d8" 
        activeDot={{ r: 8 }} 
      />
    </LineChart>
  );
}

export default LineExample
