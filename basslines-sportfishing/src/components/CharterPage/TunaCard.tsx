import React from "react";
import { Card } from "react-bootstrap";

const TunaCard: React.FC = () => {
  return (
    <Card className="w-full  mx-auto bg-blue-500 rounded-lg overflow-hidden shadow-md">
      {/* Title - Centered at the top */}
      <Card.Header className="text-center font-bold">
        Mid Shore Tuna Trips
      </Card.Header>

      <Card.Body className="flex">
        {/* Left Side - Image */}
        <div className="w-1/3">
          <Card.Img
            src="public/MidShoreTuna.jpg"
            alt="Card Image"
            className="w-full h-auto"
          />
        </div>

        {/* Right Side - Subtitle and Paragraph */}
        <div className="w-2/3 p-4">
          <Card.Title className="text-xl font-bold mb-2">
            Mid Shore Trips Out of Clarks Landing
          </Card.Title>
          <Card.Text>
            Our midshore tuna trips are the most popular choice among our
            customers. Our primary target is tuna. Depending on the time of year
            it could be yellowfin or bleufin tuna. Sharks aswell as other bottom
            fish on offshore wrecks are also a common occurance. We typicall
            leave around 3am and retrun anywhere from 12pm-4pm. We can be
            flexabile with the time on these trips. Please reach out with any
            questions.
          </Card.Text>
          <Card.Title className="text-xl font-bold mb-2">
            Price: $3000
          </Card.Title>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TunaCard;
