import React, { useEffect } from "react";
import BoatIntro from "../src/components/BoatPage/BoatIntro";
import BoatSpecificationsCard from "../src/components/BoatPage/BoatSpecs";
import BoatImages from "../src/components/BoatPage/BoatImages";

const BoatPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <>
      <BoatIntro />
      <BoatSpecificationsCard />
      <BoatImages />
    </>
  );
};

export default BoatPage;
