import React from "react";

const AboutUsCard: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      {/* Title and Subtitle */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Who We Are</h1>
        <p className="text-lg text-gray-600">
          Our Boat is run by Captain Bill and Captain Will the best Father and
          Son Duo in New Jersey. They both have fished their entire lifes up and
          down the coast of Jersey. Their passion for fishing is strong and they
          love to provide others the oportunity to share this passion as well.
        </p>
      </div>
    </div>
  );
};

export default AboutUsCard;
