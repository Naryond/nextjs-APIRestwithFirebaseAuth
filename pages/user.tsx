import React from 'react';
import Card from 'react-bootstrap/Card';
import Contributions from './contributions';

const User = ({ user, options, info }: any) => {
  return (
    <>
      <Card>
        <Card.Header>
          <div>Name: {user.name}</div>
          {user.location ? <div>Location: {user.location}</div> : null}
          {user.company ? <div>Company: {user.company}</div> : null}
          {user.blog ? <div>Web Page: {user.blog}</div> : null}
          <Card.Body>
            <picture>
              <img
                style={{ borderRadius: '20%' }}
                src={user.avatar_url}
                alt=""
              />
            </picture>
          </Card.Body>
        </Card.Header>
      </Card>
      <Card>
        <Contributions options={options} data={info} />
      </Card>
    </>
  );
};

export default User;
