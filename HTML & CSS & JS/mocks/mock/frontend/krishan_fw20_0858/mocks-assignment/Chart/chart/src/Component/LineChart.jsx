import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "july",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  export const data = {
    labels:months,
    datasets:[
       {label:'dataset1',
        data: months.map((el)=>Math.random(10,100)),
        backgroundColor:'lightgreen'
    },
    {label:`dataset2`,
        data: months.map((el)=>Math.random(10,100)),
        backgroundColor:'red'
    }
    ]
  }
const LineChart = () => {


  return (
    <div>
      <Bar
      options={options}
        datasetIdKey="id"
        data = {data}
      ></Bar>
    </div>
  );
};

export default LineChart;
