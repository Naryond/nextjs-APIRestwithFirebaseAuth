import React, { useState } from 'react';
import User from './user';

interface Data {
  preventDefault: any;
  target: any;
}

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

  const handleInput = (e: Data) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let fetched = await fetch(`https://api.github.com/users/${input}`);
    if (fetched.ok) {
      let response = await fetched.json();
      setUser(response);
      e.target.reset();
    }
  };

  return (
    <>
      <div className="mb-3 p-5">
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleInput} placeholder="Search User" />
          <button type="submit">Search</button>
        </form>
        <br />
        {user.login && <User user={user} options={options} info={info} />}
      </div>
    </>
  );
};

export default Dashboard;
