import React from "react";

const BoatSpecificationsCard: React.FC = () => {
  return (
    <div className="container-fluid h-auto md:h-80 flex flex-col lg:flex-row items-center justify-center bg-blue-500 pb-2">
      {/* Subtitle and Features */}
      <div className="w-full lg:w-1/3 px-8 mt-6 lg:mt-0 text-white">
        <div className="flex flex-col items-center lg:items-start ml-4">
          <h3 className="text-3xl font-bold mb-4 mt-4">Our Boat</h3>
          <p className="text-1xl font-bold mb-4">
            Basslines is a very well-equipped Century z3200 Center Console with
            twin 250 Yamahas. The boat cruises comfortably at 30 miles per hour
            and top speed is 45 miles per hour. This boat holds 320 gallons of
            fuel allowing no range limit to our offshore trips. With a total
            length of 32 feet and a beam of 10 feet 6 inches this boat is
            extremely stable and comfortable for all ages. A toilet, 30 gallons
            of fresh water, sinks, and a bunk in the cabin are just a few of the
            many creature comforts that make every trip more enjoyable. This
            boat also has the latest in safety and electronics, Garmin 3010C
            chartplotter / radar / color fishfinder / offshore weather service
            and ICOM boat VHF radio. Also, an Epirb, rescue life raft, and
            satellite phone.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-2/3 max-w-screen-lg">
        <img
          src="/BoatInInlet.jpg"
          alt="Boat"
          className="w-full h-auto object-contain"
          style={{ maxHeight: "60vh" }}
        />
      </div>
    </div>
  );
};

export default BoatSpecificationsCard;
