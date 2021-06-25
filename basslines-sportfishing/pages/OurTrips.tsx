import {NextPage} from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

const OurTrips: NextPage =() => {
    return(
        <div>
            <Header/>
                <title>Our Trips | BassLines Sport Fishing</title>
        
            <Gallery/>

            <Footer/>
			
        </div>

    )
};

export default OurTrips;