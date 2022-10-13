import React, { useState } from 'react';

interface data {
  preventDefault: any;
  target: any;
}

export default function Dashboard() {
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
    <div className="mb-3 p-5">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={getUser} placeholder="Insert User"></input>
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
  );
}
