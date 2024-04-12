import React from "react";

const AboutUsCard: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      {/* Title and Subtitle */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Who We Are</h1>
        <p className="text-lg text-gray-600">
          Our boat is run by Captain Bill and Captain Willy, the best father and
          son duo on the Jersey shore. They both have fished their entire lifes
          up and down the coast of Jersey targeting a multitude of species.
          Their passion for fishing runs deep, and they now enjoy sharing once
          in a lifetime experiences with their clients.
        </p>
      </div>
    </div>
  );
};

export default AboutUsCard;
