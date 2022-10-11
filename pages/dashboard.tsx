import React, { useState } from 'react';

interface data {
  preventDefault: any;
}

export default function Dashboard() {
  const [input, setInput] = useState('');
  const [user, setUser] = useState({});
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
      })
    );
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={getUser}></input>
        <button type="submit">Insert</button>
      </form>
      <br />
      <div>{user.name}</div>
      <div>{user.location}</div>
      <div>{user.company}</div>
      <div>{user.blog}</div>
      <img src={picture} alt="" />
    </div>
  );
}
