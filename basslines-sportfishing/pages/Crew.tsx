import React, { useEffect } from "react";
import CrewComponent from "../src/components/BoatPage/Accolades";

const CrewPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);
  return (
    <>
      <CrewComponent />
    </>
  );
};

export default CrewPage;
