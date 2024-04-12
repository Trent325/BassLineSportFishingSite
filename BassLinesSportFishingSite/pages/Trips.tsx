import React from 'react';

const TripPage: React.FC = () => {
  // Generate array of image objects with URLs from public/gallery folder
  const images = Array.from({ length: 24 }).map((_, index) => ({
    id: index + 1,
    url: `/gallery/Gallery${index + 1}.jpg`,
    alt: `Image ${index + 1}`,
  }));

  return (
    <div className="container-fluid py-8">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {images.map((image) => (
          <div key={image.id} className="col bg-gray-200 rounded-lg overflow-hidden">
            <img src={image.url} alt={image.alt} className="w-100 h-100 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripPage;
