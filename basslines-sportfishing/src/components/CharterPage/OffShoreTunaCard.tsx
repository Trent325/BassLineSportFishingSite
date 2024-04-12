import React from "react";
import { Card } from "react-bootstrap";

const OffShoreTunaCard: React.FC = () => {
  return (
    <Card className="w-full  mx-auto bg-blue-500 rounded-lg overflow-hidden shadow-md">
      {/* Title - Centered at the top */}
      <Card.Header className="text-center font-bold">
        Canyon Tuna Trips
      </Card.Header>

      <Card.Body className="flex">
        {/* Left Side - Image */}
        <div className="w-1/3">
          <Card.Img
            src="/OffShoreTuna2.JPG"
            alt="Card Image"
            className="w-full h-auto"
          />
        </div>

        {/* Right Side - Subtitle and Paragraph */}
        <div className="w-2/3 p-4">
          <Card.Title className="text-xl font-bold mb-2">
            Canyon Tuna Trips Out of Clarks Landing
          </Card.Title>
          <Card.Text>
            The boat will be sailing out of clarks Landing in Point Pleasant NJ.
            Our offshore canyon trips are an amazing experiences for anglers of
            all levels. During these trips we primarily target tuna, whether
            it’s bluefins, yellowfins, or big eyes. When the tuna fishing is
            slow we enjoy targeting many other species that our canyons have to
            offer such as mahi mahi, tile fish, rose fish, barrel fish, sharks,
            and so much more. In addition to targeting these fish, mammals such
            as whales, dolphins, sea turtles and many other sea creatures are
            common sites to see.
          </Card.Text>
          <Card.Title className="text-xl font-bold mb-2">
            Price: $3500
          </Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
};

export default OffShoreTunaCard;
