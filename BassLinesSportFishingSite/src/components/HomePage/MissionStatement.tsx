import React from "react";

const MissionStatement: React.FC = () => {
  return (
    <div className="container mx-auto flex flex-col w-100 lg:flex-row items-center justify-center py-8 mt-4 lg:px-8 " style={{ width: '100%' }}>
      <div className="w-1/2 mr-8 w-full pt-10 mt-5">
        <h2 className="text-3xl font-bold mb-4 pl-4">Our Mission</h2>
        <p className="text-lg pl-4">
          At Basslines Sportfishing, our philosophy is to provide a comfortable
          great charter boat, with top-notch customer service, and an experience
          of a lifetime each and every trip. We are a charter out of Manasquan
          New Jersey as well as in the Raritan Bay. We offer Off-shore and
          In-Shore Trips, and target a variety of species.
        </p>
      </div>
      <div className="lg:w-1/2 pt-10 mt-10">
        <img src="/BoatInInlet.jpg" alt="Mission Image" className="w-full" />
      </div>
    </div>
  );
};

export default MissionStatement;
