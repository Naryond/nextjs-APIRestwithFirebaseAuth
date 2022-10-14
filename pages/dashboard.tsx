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

interface Data {
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

  // handleXXXXX is a more accepted pattern
  const getUser = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: Data) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${input}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        e.target.reset();
      });
    // fetch('url').then(res => res.json()).then(data => ....)
    // fetch('url').then(res => res.json().then(data => ....))
  };

  return (
    <>
      <div className="mb-3 p-5">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={getUser} placeholder="Insert User" />
          <button type="submit">Search</button>
        </form>
        <br />
        {user.login && (
          <>
            <div>
              <div>Name: {user.name}</div>
              <div>Location: {user.location}</div>
              {user.company ? <div>Company: {user.company}</div> : null}
              {user.blog && <div>Web Page: {user.blog}</div>}
              <picture>
                <img src={user.avatar_url} alt="" />
              </picture>
            </div>
            <div style={{ width: 600, height: 300 }}>
              <Line options={options} data={info} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
