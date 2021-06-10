import {NextPage} from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

const OurTrips: NextPage =() => {
    return(
        <div>
            <Header/>
        
            <Gallery/>

            <Footer/>
			
        </div>

    )
};

export default OurTrips;