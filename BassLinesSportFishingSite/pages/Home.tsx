import React, { useEffect } from "react";
import VideoSection from "../src/components/HomePage/video/VideoSection";
import MissionStatement from "../src/components/HomePage/MissionStatement";
import CardComponent from "../src/components/HomePage/ServiceCards";
import AboutUsCard from "../src/components/HomePage/AboutUs";
import ImageGallery from "../src/components/HomePage/ImageCard";
import ExpoImage from "../public/Expo.png"
import InstagramFeed from "../src/components/HomePage/Instagram";
import CrewBoat from "../public/CrewBoat.jpg"
import WillyK from "../public/WillyKeith.jpg"
import TunaCrew from "../public/TunaCrew.jpg";

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <>
      <VideoSection />
      <MissionStatement />
      <CardComponent />
      <AboutUsCard />
      <ImageGallery
        images={[
          ExpoImage,
          CrewBoat,
          WillyK,
          TunaCrew,
        ]}
      />
      <InstagramFeed/>
    </>
  );
};

export default HomePage;
