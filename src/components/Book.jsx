import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Page from './page';
import { pages } from '../data/pages';

const Book = () => {
  const bookRef = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const [bookSize, setBookSize] = useState({ width: 0, height: 0 });

  // Detect if the screen is mobile-sized and update book size
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);

      // Adjusted aspect ratio for taller images on mobile
      const aspectRatio = isMobileView ? 3 / 6 : 3 / 5; // Taller on mobile (0.5 vs 0.6)
      let width = window.innerWidth;
      let height = window.innerHeight;

      // Account for the black bar height on mobile (e.g., 60px)
      if (isMobileView) {
        height -= 60; // Reserve space for the fixed black bar
      }

      // Ensure the full width is visible while maximizing height
      if (width / height > aspectRatio) {
        // If the viewport is wider than the aspect ratio, limit by height
        width = height * aspectRatio;
      } else {
        // If the viewport is taller than the aspect ratio, limit by width
        height = width / aspectRatio;
      }

      // Adjust height slightly to make images taller without cutting width
      height = Math.min(height, (isMobileView ? window.innerHeight - 60 : window.innerHeight) * 0.95);
      setBookSize({ width, height });
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Disable scrolling on mobile
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Reset on cleanup
    };
  }, [isMobile]);

  const handlePrevPage = () => {
    bookRef.current.pageFlip().flipPrev();
  };

  const handleNextPage = () => {
    bookRef.current.pageFlip().flipNext();
  };

  return (
    <div className="flex flex-col items-center justify-start w-screen h-screen bg-black text-white m-0 p-0 overflow-hidden">
      {/* Book Container */}
      <div
        className={`flex items-center justify-center w-full ${
          isMobile ? 'h-[calc(100vh-60px)]' : 'h-full'
        } m-0 p-0`}
      >
        <HTMLFlipBook
          width={bookSize.width}
          height={bookSize.height}
          size="fixed"
          minWidth={300}
          maxWidth={500}
          minHeight={400}
          maxHeight={700}
          maxShadowOpacity={0.7}
          showCover={true}
          mobileScrollSupport={false}
          flippingTime={1000}
          usePortrait={isMobile}
          startPage={0}
          drawShadow={true}
          ref={bookRef}
          className="shadow-2xl"
          style={{
            background: 'rgba(255, 245, 200, 0.3)',
            margin: 0,
            padding: 0,
          }}
        >
          {pages.map((page, index) => (
            <div
              key={index}
              className="page relative"
              style={{
                width: `${bookSize.width}px`,
                height: `${bookSize.height}px`,
              }}
            >
              <Page content={page.content} image={page.image} />
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* Fixed Black Bar for Navigation Buttons on Mobile */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 w-full h-[60px] bg-black flex items-center justify-between px-4">
          <button
            onClick={handlePrevPage}
            className="bg-gray-800 bg-opacity-50 text-white rounded-full p-2 hover:bg-gray-700"
          >
            ←
          </button>
          <button
            onClick={handleNextPage}
            className="bg-gray-800 bg-opacity-50 text-white rounded-full p-2 hover:bg-gray-700"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default Book;