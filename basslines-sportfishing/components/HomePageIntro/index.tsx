import React from "react";
import style from "./HomeIntro.module.scss";

const HomePageIntro: React.FC =() => {
    return(
        <div>
          
            <div className = {style.Parent}>
                <div className = {style.PhilosphyBox}>
                    <h1> Who We Are</h1>
                    At Basslines Sportfishing, our philosophy is to provide a comfortable great charter boat, with top notch customer service, and an experience of a lifetime each and every trip. We are a charter out of Manasquan New Jersey as well as in the Raritan Bay. We offer Off-shore and In-Shore Trips, and target a variety of speices.
                    <h2> What We Provide</h2>
                    We provide all gear, bait, tackle, instruction, music, fish processing and bagging
                    as well as a knowledgeable hard-working mate.
                    <h2>Our Crew</h2>
                    Our Boat is run by Captain Bill and Captain Will the best Father and Son Duo in New Jersey. They both have fished their entire lifes up and down the coast of Jersey. Their passion for fishing is strong and they love to provide others the oportunity to share this passion as well.
                    
                </div>
                    <div className = {style.BoatBox}>
                        <h1>
                            What We Fish For
                        </h1>
                            Here at BassLines we enjoy catching all fish and provide charters on the jersey shore for various types of fish. We are avalible for charters year round in various locations along the jersey shore. In the spring we are in the Raritan Bay, mainly targeting Stripped bass. In the summer we are based in Clarks Landing, offering off and in shore charters for a variety of fish such as tuna, mahi mahi and tile fish. In the fall we return to the Raritan Bay again for mainly Stripped bass. In the winter we are based in Lanoka harbor fishing for Black Fish.
                            <h2> Trips We Offer</h2>
                            <ul>
                                <li>
                                    Stripped Bass
                                </li>
                                <li>
                                    Sea Bass
                                </li>
                                <li>
                                    Off-Shore, For Tuna and a variety of other fish such as mahi mahi
                                </li>
                                <li>
                                    In-Shore, for similar fish as Off-Shore
                                </li>
                            </ul>

                    </div>
            </div>
            <div className = {style.img}>
                <div className = {style.imgWrapper}></div>
                <div className = {style.landingContainerContainer}>
                    <div className = {style.landingContainerText}>
                    <h1 className = {style.landingContainerTextSubheadingT}>We are a fishing charter specializing in fishing excursions targeting striped bass in the bay and ocean as well as offshore trips targeting primarily tuna fish, mahi mahi, tile fish and shark. We can accommodate up to six guests and cater to every skill level.</h1>
                    
                    <h1 className = {style.landingContainerTextSubheading}>Hear From Our Customers</h1>
                    </div>
                </div>
            </div>

            <div className = {style.Parent}>
                <div className = {style.ReviewBox}>
                    "Best boat on the water! both of them really know their stuff and it shows. They really go above and beyond to get you into fish, and they make you feel like you've been friends for years the minute you step on the boat. 10/10 would recommend these guys, can't wait to get back on the water with them!"
                    <h1> - Gabe Harvey</h1>
                </div>
                <div className = {style.ReviewBox}>
                    "I’ve been on a few trips with Bassline Sportsfishing and Captain Bill always found the fish for us. His mate Will is a fantastic crew member, he’s helpful, energetic and very personable. I don’t fool around with guides and charters that don’t produce. That’s why I highly recommend Bassline Sportsfishing. Tight lines"
                    <h1> - Jack Spoto</h1>
                </div>
                <div className = {style.ReviewBox}>
                    "The best charter I've ever been on. Captain Bill and mate Willy are very professional, knowledgeable and personable. They knew how to find the fish and they kept us on them all day.  They offered us drinks and snacks and made us feel at home. I'm looking forward to going out for Tuna with Basslines Sportfishing."
                    <h1> - Elliot Harvey</h1>
                </div>
            
            </div>
          
            

           <div className = {style.button}>
               <div className = {style.buttonBox}>
               <h1><a href = "crew">Meet Our Crew</a></h1>
               </div>

           </div>
            
        </div>


    )
}

export default HomePageIntro;
