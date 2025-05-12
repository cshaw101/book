import { pages } from './Pages';

function BookViewer({ currentPageIndex }) {
  const isCover = currentPageIndex === 0;
  const isLastPage = currentPageIndex === pages.length - 1;

  let visiblePages = [];

  if (isCover || isLastPage) {
    // Show only one page
    visiblePages = [pages[currentPageIndex]];
  } else {
    // Show two pages: current and next
    visiblePages = [pages[currentPageIndex], pages[currentPageIndex + 1]];
  }

  return (
    <div className="book flex w-full h-full">
      {visiblePages.map((page, index) => (
        <div key={index} className="w-1/2 h-full relative">
          <img src={page.image} alt={`Page ${currentPageIndex + index}`} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0">{page.content}</div>
        </div>
      ))}
    </div>
  );
}

export default BookViewer;