import React, { useState } from 'react';
import User from './user';
import { useForm } from 'react-hook-form';

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
  const [user, setUser] = useState<any>({});
  const { register, handleSubmit, reset } = useForm<any>();

  const onSubmit = async ({ search }: any) => {
    let fetched = await fetch(`https://api.github.com/users/${search}`);
    if (fetched.ok) {
      let response = await fetched.json();
      setUser(response);
      reset();
    }
  };

  return (
    <div className="mb-3 p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Search User" {...register('search')} />
        <button type="submit">Search</button>
      </form>
      <br />
      {user.login && <User user={user} options={options} info={info} />}
    </div>
  );
};

export default Dashboard;
