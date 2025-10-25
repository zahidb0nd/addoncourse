import React from 'react';

function User({ firstName, lastName }) {
  return (
    <p>Name: {firstName} {lastName}</p>
  );
}

export default User;