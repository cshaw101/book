import React from 'react';

const Page = ({ content, image }) => {
  return (
    <div
      className="relative w-full h-full bg-no-repeat bg-center rounded-md shadow-xl border-4 border-yellow-100"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100%',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Text directly on image with kid-friendly styling */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10 p-6 text-lg leading-relaxed text-white font-comic-neue text-shadow-lg">
        {content}
      </div>
    </div>
  );
};

export default Page;