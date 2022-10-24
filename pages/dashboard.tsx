import React, { useState } from 'react';
import Profile from '../components/profile';
import { useForm, SubmitHandler } from 'react-hook-form';
import { info } from '../components/chartData';

export type Fetched = {
  login: string;
  name: string;
  location: string;
  company: string;
  blog: string;
  avatar_url: string;
};

type Form = {
  search: string;
};

type Dataset = {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
};

export type info = { labels: string; datasets: Dataset };

const Dashboard = () => {
  const [user, setUser] = useState<Fetched>();
  const { register, handleSubmit, reset } = useForm<Form>();

  const onSubmit: SubmitHandler<Form> = async ({ search }) => {
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
      {user?.login && <Profile user={user} />}
    </div>
  );
};

export default Dashboard;
