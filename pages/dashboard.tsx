import React, { useState } from 'react';
import User from './user';
import { useForm } from 'react-hook-form';
import { options, info } from './chartData';

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
