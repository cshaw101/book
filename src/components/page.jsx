import React from 'react';

const Page = ({ content, image }) => {
  // Convert children to an array and check if there's meaningful content
  const childrenArray = React.Children.toArray(content.props.children);
  const hasText = childrenArray.length > 0 && childrenArray.some(child => {
    // Check if child is a string with non-whitespace content
    if (typeof child === 'string') return child.trim().length > 0;
    // Check if child is a React element with meaningful content
    return child.props && child.props.children;
  });

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
      {hasText ? (
        <div className="absolute inset-0 flex items-center justify-center text-center z-10 p-6">
          <div className="parchment">
            <div className="text-lg leading-loose text-gray-800 font-annie-use-your-telescope text-shadow-lg">
              {content}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Page;