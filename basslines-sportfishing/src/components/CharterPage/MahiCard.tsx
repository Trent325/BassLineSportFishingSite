import React from "react";
import { Card } from "react-bootstrap";

const MahiCard: React.FC = () => {
  return (
    <Card className="w-full  mx-auto bg-blue-500 rounded-lg overflow-hidden shadow-md">
      {/* Title - Centered at the top */}
      <Card.Header className="text-center font-bold">
        OffShore Sea Bass Trips
      </Card.Header>

      <Card.Body className="flex">
        {/* Left Side - Image */}
        <div className="w-1/3">
          <Card.Img
            src="gallery/Gallery9.jpg"
            alt="Card Image"
            className="w-full h-auto"
          />
        </div>

        {/* Right Side - Subtitle and Paragraph */}
        <div className="w-2/3 p-4">
        <Card.Title className="text-xl font-bold mb-2">OffShore Sea Bass Out of Clarks Landing</Card.Title>
          <Card.Text>
            In the winter months, we target giant seabass on our offshore
            wrecks. These trips produce seabass to 7+ pounds and a lot of them.
            Our wrecks we fish are 50+ miles offshore but it is well worth the
            trip! Black Fish, We target Black fish in wrecks from 20 feet of
            water to 80 feet. In our opinion, they are one of the hardest
            fighting fish pound for pound in the ocean, and taste great too. It
            is a blast to fish for them and we highly recommend this trip to
            anyone who has not tried it before.
          </Card.Text>
          <Card.Title className="text-xl font-bold mb-2">Price: $1800</Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MahiCard;
