import React, { useState } from 'react';
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

interface data {
  preventDefault: any;
  target: any;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['2017', '2018', '2019', '2020', '2021', '2022'];

const options = {};

const info = {
  labels,
  datasets: [
    {
      label: 'React',
      data: [32, 42, 51, 60, 51, 95],
      backgroundColor: '#2196F3',
      borderColor: '#2196F3',
    },
    {
      label: 'Angular',
      data: [37, 42, 41, 37, 31, 44],
      backgroundColor: '#F44236',
      borderColor: '#F44236',
    },
    {
      label: 'Vue',
      data: [60, 54, 54, 28, 27, 49],
      backgroundColor: '#FFCA29',
      borderColor: '#FFCA29',
    },
  ],
};

const Dashboard = () => {
  const [input, setInput] = useState('');
  const [user, setUser] = useState<any>({});
  const [picture, setPicture] = useState('');

  const getUser = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: data) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${input}`).then((response) =>
      response.json().then((data) => {
        setUser(data);
        setPicture(`${data.avatar_url}`);
        e.target.reset();
      })
    );
  };

  return (
    <>
      <div className="mb-3 p-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={getUser}
            placeholder="Insert User"
          ></input>
          <button type="submit">Search</button>
        </form>
        <br />
        {user.login && (
          <div>
            <div>Name: {user.name}</div>
            <div>Location: {user.location}</div>
            <div>Company: {user.company}</div>
            <div>Web Page: {user.blog}</div>
            <picture>
              <img src={picture} alt="" />
            </picture>
          </div>
        )}
      </div>
      <div style={{ width: 600, height: 300 }}>
        <Line options={options} data={info} />
      </div>
    </>
  );
};

export default Dashboard;
