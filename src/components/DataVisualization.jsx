import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,

  plugins: {
    title: {
      display: true,
      text: 'Line Chart of input_values.csv',
      font: {
        size: 22,
        weight: 'bold',
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "x-axis represents the KP values",
      },
      ticks: {
        padding: 20,
      },
    },
    y: {
      title: {
        display: true,
        text: "y-axis represents the X values",
      },
      ticks: {
        padding: 20,
      },
    },
  },
};

const DataVisualization = ({ columnKP, columnX }) => {
  const chartData = {
    labels: columnKP, // Assuming KP is at index 0
    datasets: [
      {
        label: 'X vs KP',
        data: columnX,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return <Line options={options} data={chartData} className='border border-slate-300 m-10 p-10' />;
};

export default DataVisualization;