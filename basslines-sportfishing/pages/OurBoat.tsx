import {NextPage} from "next";
import styles from "../styles/OurBoat.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BoatPageIntro from "../components/BoatPageIntro";

const OurBoat: NextPage =() => {
    return(
        <div>
            <Header/>
                <title> BassLines Boat | BassLines Sport Fishing</title>
            <BoatPageIntro/>

            <Footer/>
			
        </div>

    )
};

export default OurBoat;
