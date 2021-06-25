import {NextPage} from "next";
import style from "/style/Home.module.scss";
import Header from "../components/Header";
import DroneShot from "../components/DroneShot";
import Footer from "../components/Footer";
import HomePageIntro from "../components/HomePageIntro";

const Home: NextPage =() => {
  return (

    <div>
      <Header/>
        <title>BassLines Sport Fishing  | BassLines Sport Fishing</title>
          <DroneShot/>
          <div>
            <HomePageIntro/>
          </div>
      <Footer/>
    </div>
    
    
  )
};

export default Home;
