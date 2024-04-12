import React from "react";
import { Link } from "react-router-dom";

const ImageGallery: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={image}
              alt={`Image ${index}`}
              className="w-100 h-80 object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex mt-4 mb-4 justify-center justify-evenly">
        <Link to="/Crew" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Meet the Crew
        </Link>
        <Link to="/AboutUs" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          See the Boat
        </Link>
      </div>
    </>
  );
};

export default ImageGallery;
