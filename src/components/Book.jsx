import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './page';
import { pages } from '../data/pages';

const Book = () => {
  const bookRef = useRef();

  const handlePrevPage = () => {
    bookRef.current.pageFlip().flipPrev();
  };

  const handleNextPage = () => {
    bookRef.current.pageFlip().flipNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Centered container for the book and buttons */}
      <div className="flex flex-col items-center justify-center p-6">
        {/* Flipbook component */}
        <div className="bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 rounded-xl shadow-lg border-8 border-yellow-300">
          <HTMLFlipBook
            width={400}
            height={500}
            size="fixed"
            minWidth={300}
            maxWidth={500}
            minHeight={400}
            maxHeight={700}
            maxShadowOpacity={0.7}
            showCover={true} // Ensures the cover is treated as a single page
            mobileScrollSupport={false}
            flippingTime={1000}
            usePortrait={false} // Enables two-page view
            startPage={0}
            drawShadow={true}
            ref={bookRef}
            className="shadow-2xl"
            style={{ background: 'rgba(255, 245, 200, 0.3)' }}
          >
            {pages.map((page, index) => (
              <div key={index} className="page">
                <Page content={page.content} image={page.image} />
              </div>
            ))}
          </HTMLFlipBook>
        </div>
        {/* Navigation buttons */}
        <div className="flex space-x-4 mt-8">
          <button
            onClick={handlePrevPage}
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full shadow-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;