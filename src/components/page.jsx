const Page = ({ content, image }) => {
  return (
    <div
      className="relative w-full h-full bg-no-repeat bg-center rounded-md shadow-xl border-4 border-yellow-100"
      style={{
        backgroundImage: `url(${image})`,    // Set the background image
        backgroundSize: 'cover',             // Ensure the image fully covers the container
        backgroundPosition: 'center',        // Center the image
        backgroundRepeat: 'no-repeat',       // Prevent image repetition
        minHeight: '100%',                   // Ensure the page always takes up full height
        backgroundAttachment: 'fixed',       // Ensure the image stays in place on scroll
      }}
    >
      {/* Text container */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10 p-6 text-lg leading-relaxed text-white">
        {content}
      </div>
    </div>
  );
};

export default Page;
