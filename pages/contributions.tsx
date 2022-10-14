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

const Contributions = ({ options, data }: any) => {
  return (
    <div style={{ width: 600, height: 300 }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default Contributions;
