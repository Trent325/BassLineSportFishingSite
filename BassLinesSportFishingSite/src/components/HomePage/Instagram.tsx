import React from "react";
import BoatInSlip from "../../../public/CircleCard.png";
import Crew2 from "../../../public/CircleCard2.png";

const InstagramFeed: React.FC = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg flex flex-col md:flex-row items-center md:items-center justify-between">
      <div className="flex-grow text-center md:text-left md:mr-10">
        <p className="text-lg font-semibold">Check us out on Instagram</p>
        <p className="font-bold">Follow us for more updates</p>
        <a
          href="https://www.instagram.com/basslines.sportfishing/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mt-4 md:mt-2 md:ml-0 justify-center items-center"
        >
          Follow
        </a>
      </div>
      <div className="flex flex-col md:flex-row mt-4 md:mt-0">
        <img
          src={BoatInSlip}
          alt="Instagram Profile"
          className="w-full md:w-64 h-auto md:mr-4 mb-4 md:mb-0"
        />
        <img
          src={Crew2}
          alt="Instagram Profile"
          className="w-full md:w-64 h-auto"
        />
      </div>
    </div>
  );
};

export default InstagramFeed;
