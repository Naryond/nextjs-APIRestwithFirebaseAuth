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

const User = ({ user, options, info }: any) => {
  return (
    <>
      <div>
        <div>Name: {user.name}</div>
        <div>Location: {user.location}</div>
        {user.company ? <div>Company: {user.company}</div> : null}
        {user.blog ? <div>Web Page: {user.blog}</div> : null}
        <picture>
          <img src={user.avatar_url} alt="" />
        </picture>
      </div>
      <div style={{ width: 600, height: 300 }}>
        <Line options={options} data={info} />
      </div>
    </>
  );
};

export default User;
