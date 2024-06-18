import React from 'react';

const LeftBar = () => {
  // Kullanıcı adı ve postlarını burada görüntüleyebilirsiniz
  const username = 'Kullanıcı Adı';
  const posts = [
    'Post 1',
    'Post 2',
    'Post 3',
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{username}</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index} className="mb-2">{post}</li>
        ))}
      </ul>
    </div>
  );
};

export default LeftBar;
