import React from 'react';

const Background = () => {
  const windowWidth = window.innerWidth;
  // TODO unsplash image 불러오도록 하기
  const photo = 'https://images.unsplash.com/photo-1535557597501-0fee0a500c57';
  // const photo = 'https://images.unsplash.com/photo-1537210249814-b9a10a161ae4';

  return (
    <div className="w-full h-screen">
      <img
        draggable="false"
        src={`${photo}?auto=format&fit=crop&w=${windowWidth}&q=80`}
        className="object-cover w-full h-full"
        alt="background"
      />
    </div>
  );
};

export default Background;
