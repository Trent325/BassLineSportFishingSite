import React from "react";
import { Card } from "react-bootstrap";

const BassCard: React.FC = () => {
  return (
    <Card className="w-full  mx-auto bg-blue-500 rounded-lg overflow-hidden shadow-md">
      {/* Title - Centered at the top */}
      <Card.Header className="text-center font-bold">
        Stripped Bass Trips
      </Card.Header>

      <Card.Body className="flex">
        {/* Left Side - Image */}
        <div className="w-1/3">
          <Card.Img
            src="public/BassTrip.JPG"
            alt="Card Image"
            className="w-full h-auto"
          />
        </div>

        {/* Right Side - Subtitle and Paragraph */}
        <div className="w-2/3 p-4">
          <Card.Title className="text-xl font-bold mb-2">
            Bass Trips Out of Raritan Bay
          </Card.Title>
          <Card.Text>
            In the fall, we fish for striped bass as they migrate south and pass
            through our local waters. Our season typically starts fishing off
            long island then as the fish travel south we travel south with them,
            eventually fishing off south jersey. We target fall bass with live
            bait and by trolling. March 15th through June 15th the boat will be
            sailing out of Harbor Side Marina in Perth Amboy N.J. These trips
            will be 6 hours and are limited to six people. The striped bass
            fishery in the Raritan had been phenomenal for us over the years,
            and we expect it to be even better this year. We target these fish
            primarily with live bait, trolling, and casting artificial lures.
            These trips are a great experience and are family-friendly.
          </Card.Text>
          <Card.Title className="text-xl font-bold mb-2">
            Price: $1000
          </Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BassCard;
