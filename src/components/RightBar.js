import React from 'react';

const RightBar = () => {
  // Diğer kullanıcı adlarını burada listeleyebilirsiniz
  const otherUsers = [
    'User 1',
    'User 2',
    'User 3',
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Other Users</h2>
      <ul>
        {otherUsers.map((user, index) => (
          <li key={index} className="mb-2">{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default RightBar;
