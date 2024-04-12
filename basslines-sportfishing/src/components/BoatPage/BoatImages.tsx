import React from 'react';

const BoatImages: React.FC = () => {
  return (
    <div className="bg-gray-200 py-8 px-4">
      <div className="flex flex-wrap justify-between">
        <img src="/Boat1.jpg" alt="Image 1" className="w-full sm:w-1/4 p-2" />
        <img src="/Boat2.jpg" alt="Image 2" className="w-full sm:w-1/4 p-2" />
        <img src="/Boat3.jpg" alt="Image 3" className="w-full sm:w-1/4 p-2" />
        <img src="/Boat4.jpg" alt="Image 4" className="w-full sm:w-1/4 p-2" />
      </div>
    </div>
  );
};

export default BoatImages;
