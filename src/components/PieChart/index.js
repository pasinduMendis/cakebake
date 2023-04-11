import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

function PieChart({
    title = 'Title of the Pie Chart',
    data = [44, 55, 41, 17, 15],
    legends = ['Male', 'Female']
}) {
    const [state, setState] = useState({
        series: data,
            options: {
              chart: {
                width: 380,
                type: 'donut',
              },
              plotOptions: {
                pie: {
                  startAngle: -90,
                  endAngle: 270
                }
              },
              dataLabels: {
                enabled: false
              },
              fill: {
                type: 'gradient',
              },
              legend: {
                formatter: function(legends, opts) {
                  return legends + " - " + opts.w.globals.series[opts.seriesIndex]
                }
              },
              title: {
                text: title
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
    });
  return (
    <div className=' bg-white flex justify-center rounded-md pt-3'>
        <ReactApexChart options={state.options} series={state.series} type="donut" width={400} />
    </div>
  )
}

export default PieChart