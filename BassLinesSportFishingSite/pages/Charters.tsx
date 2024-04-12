import React, { useEffect } from "react";
import TitleBar from "../src/components/CharterPage/TitleBar";
import BassCard from "../src/components/CharterPage/BassCard";
import MahiCard from "../src/components/CharterPage/MahiCard";
import TunaCard from "../src/components/CharterPage/TunaCard";
import OffShoreTunaCard from "../src/components/CharterPage/OffShoreTunaCard";

const CharterPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);

  return (
    <>
      <TitleBar />
      <BassCard />
      <MahiCard />
      <TunaCard />
      <OffShoreTunaCard />
    </>
  );
};

export default CharterPage;
