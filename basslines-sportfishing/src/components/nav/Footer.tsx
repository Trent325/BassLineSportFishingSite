import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Instagram */}
        <a
          href="https://www.instagram.com/basslines.sportfishing/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mb-4 text-white" // Changed text color to white
        >
          <FaInstagram className="text-4xl mr-2" />
          <span className="text-lg">Instagram</span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/Basslines.Sportfishing.charters/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:bg-blue-700 text-black px-4 py-2 rounded-lg mb-4"
        >
          <FaFacebook className="text-xl mr-2" />
          Facebook
        </a>

        {/* Contact Phone Number */}
        <a href="tel:+12019066847" className="text-lg text-white">Contact Us: (201)-906-6847</a>
      </div>
    </footer>
  );
};

export default Footer;
