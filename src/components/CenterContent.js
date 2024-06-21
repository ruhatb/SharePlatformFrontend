import React from 'react';

const CenterContent = () => {
  // Post görsellerini burada görüntüleyebilirsiniz
  const postImages = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {postImages.map((url, index) => (
        <img key={index} src={url} alt={`Post ${index + 1}`} className="w-full h-auto"/>
      ))}
    </div>
  );
};

export default CenterContent;
