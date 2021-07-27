import React, { Component } from 'react';
import Chart from 'react-apexcharts';

const ChartGender = ({ data }) => {
  
  const labels = data.data.map(item => item.label)
  const series = data.data.map(item => item.value)

  const options = {
    series,
    labels
  }

  return (
    <div className="card">
    <button className="button">Duplicate</button>
    <div className="donut">
      <Chart options={options} series={series} type="donut" height="200" width="380" />
    </div>
  </div>
  )
}

export default ChartGender;