import React from 'react';

const CrewComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-200">
      <h1 className="text-3xl font-bold mt-8 mb-4">Our Crew</h1>
      <p className="text-lg text-center mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, neque vitae
        sollicitudin posuere, risus nisl tincidunt quam.
      </p>
      <div className="flex flex-wrap justify-center items-center">
        <div>
        <img
          src="path_to_your_image.jpg"
          alt="Crew Image"
          className="w-1/2 h-64 rounded-full mb-8 md:mr-8"
        />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Meet Our Team</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, neque vitae
            sollicitudin posuere, risus nisl tincidunt quam, non vulputate est ante ut augue.
            Vivamus ut ligula et odio efficitur efficitur.
          </p>
          <a
            href="https://www.example.com/article"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-4 inline-block"
          >
            Read More
          </a>
          </div>
      </div>
    </div>
  );
};

export default CrewComponent;
