import {NextPage} from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookTrip from "../components/BookATrip";

const BookATrip: NextPage =() => {
    return(
        <div>
            <Header/>
            
                <title>Book A trip | BassLines Sport Fishing</title>
                
                <BookTrip/>
            <Footer/>

        </div>
    )
    
};

export default BookATrip;