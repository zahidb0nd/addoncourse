import React from 'react';
import User from './User';
import Counter from './counter';
import ComponentA from './ComponentA';

function App() {
  const users = [
    { firstName: 'Tony', lastName: 'Stark' },
    { firstName: 'James', lastName: 'Mary' },
    { firstName: 'Vikarm', lastName: 'Rathod' },
  ];

  return (
    <div>
      <h1>Users</h1>
      {users.map((user, index) => (
        <User key={index} firstName={user.firstName} lastName={user.lastName} />
      ))}
      <Counter />
      <ComponentA />
    </div>
  );
}

export default App;