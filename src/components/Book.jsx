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

      // Adjusted aspect ratio for taller images
      const aspectRatio = 3 / 5; // Standard aspect ratio for images
      let width = window.innerWidth;
      let height = window.innerHeight;

      // Ensure the full width is visible while maximizing height
      if (width / height > aspectRatio) {
        // If the viewport is wider than the aspect ratio, limit by height
        width = height * aspectRatio;
      } else {
        // If the viewport is taller than the aspect ratio, limit by width
        height = width / aspectRatio;
      }

      // Adjust height slightly to make images taller without cutting width
      height = Math.min(height, window.innerHeight * 0.95); // Use 95% of viewport height
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
    <div
      className={`flex items-center justify-center ${
        isMobile ? 'w-screen h-screen' : 'min-h-screen'
      } bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white`}
    >
      <div className="flex items-center justify-center w-full h-full">
        <HTMLFlipBook
          width={bookSize.width} // Dynamically calculated width
          height={bookSize.height} // Dynamically calculated height
          size="fixed" // Fixed size for better control
          minWidth={300}
          maxWidth={500}
          minHeight={400}
          maxHeight={700}
          maxShadowOpacity={0.7}
          showCover={true}
          mobileScrollSupport={false}
          flippingTime={1000}
          usePortrait={isMobile} // Single-page view on mobile
          startPage={0}
          drawShadow={true}
          ref={bookRef}
          className="shadow-2xl"
          style={{
            background: 'rgba(255, 245, 200, 0.3)',
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
              {/* Navigation arrows for mobile */}
              {isMobile && (
                <>
                  <button
                    onClick={handlePrevPage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 hover:bg-gray-700"
                  >
                    &#8592;
                  </button>
                  <button
                    onClick={handleNextPage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-2 hover:bg-gray-700"
                  >
                    &#8594;
                  </button>
                </>
              )}
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default Book;