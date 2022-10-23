import React from 'react';
import Contributions from './contributions';

const User = ({ user, options, info }: any) => {
  return (
    <>
      <div>
        <div>Name: {user.name}</div>
        {user.location ? <div>Location: {user.location}</div> : null}
        {user.company ? <div>Company: {user.company}</div> : null}
        {user.blog ? <div>Web Page: {user.blog}</div> : null}
        <picture>
          <img style={{ borderRadius: '20%' }} src={user.avatar_url} alt="" />
        </picture>
      </div>
      {/* <Contributions options={options} data={info} /> */}
    </>
  );
};

export default User;
