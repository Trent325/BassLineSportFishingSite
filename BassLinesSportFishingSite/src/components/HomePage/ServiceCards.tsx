import React from "react";
import { Link } from "react-router-dom";

const CardComponent: React.FC = () => {
  return (
    <div className="bg-gray-200">
      <div className="container w-full py-8 ">
        {/* Title and Subtitle */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Trips We Offer</h1>
          <p className="text-lg text-gray-600">
            We are a fishing charter specializing in fishing excursions
            targeting striped bass in the bay and ocean as well as offshore
            trips targeting primarily tuna fish, mahi mahi, tile fish and shark.
            We can accommodate up to six guests and cater to every skill level.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <div
              className="bg-cover bg-center h-64"
              style={{ backgroundImage: "url('/BassTrip.JPG')" }}
            >
              <div className="absolute bottom-0 w-full bg-blue-500 py-2 px-4 flex justify-between items-center bg-primary">
                <Link to="/Charters">
                  <button className="text-white">Striped Bass</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <div
              className="bg-cover bg-center h-64"
              style={{
                backgroundImage: "url('/MidShoreTuna.jpg')",
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            >
              <div className="absolute bottom-0 w-full bg-blue-500 py-2 px-4 flex justify-between items-center bg-primary">
                <Link to="/Charters">
                  <button className="text-white">Mid-Shore Tuna</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <div
              className="bg-cover bg-center h-64"
              style={{ backgroundImage: "url('/OffShoreCard.jpg')" }}
            >
              <div className="absolute bottom-0 w-full bg-blue-500 py-2 px-4 flex justify-between items-center bg-primary">
                <Link to="/Charters">
                  <button className="text-white ">Canyon Tuna</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative overflow-hidden rounded-lg shadow-md">
            <div
              className="bg-cover bg-center h-64"
              style={{ backgroundImage: "url('gallery/Gallery9.jpg')" }}
            >
              <div className="absolute bottom-0 w-full bg-blue-500 py-2 px-4 flex justify-between items-center bg-primary">
                <Link to="/Charters">
                  <button className="text-white">OffShore Sea Bass</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
