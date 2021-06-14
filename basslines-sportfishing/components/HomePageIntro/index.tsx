import React from "react";
import style from "./HomeIntro.module.scss";

const HomePageIntro: React.FC =() => {
    return(
        <div>
          
            <div className = {style.Parent}>
                <div className = {style.textWrapper}>
                    At Basslines Sportfishing, our philosophy is to provide a comfortable great boat, with top notch customer service, and an experience of a lifetime each and every trip.
                </div>
            </div>
            <div className = {style.img}>
                <div className = {style.imgWrapper}>
                
                </div>
            </div>
            <div className = {style.Charter}>
                <div className = {style.textWrapperHeader}>
                    <p>
                    We are a fishing charter specializing in fishing excursions targeting striped bass in the bay and ocean as well as offshore trips targeting primarily tuna fish, mahi mahi, tile fish and shark. We can accommodate up to six guests and cater to every skill level.
                    </p>
                </div>   
            </div>
            <div className = {style.reviewintro}>
                <p>Hear From Our Customers</p>
                
            </div>
            <div className = {style.card}>
                <div className = {style.cardImg}>    
                </div>
                    <div className = {style.cardText}>
                        <div className = {style.cardTextWrapper}>
                        <p>
                        "Went out for a striper charter in Perth Amboy on a day where it was fairly windy. Soon I completely forgot how windy and cold it was because there was a fish on just about all the time. Started with trolling which was the most successful and I think the quickest we hooked a fish was 20ft. Soon moved on to casting and jigging which was not as successful but still some of the most exciting fishing of my life constant action. For my first time ever striper fishing captain Will made a challenging task easy and enjoyable, the boat caught well over 30 striper in a 5 hour period, guy really knows his stuff, will be a fishing trip I will always remember and the first of many with a great charter crew." 
                        </p>
                        <b>
                        - Trent Green
                        </b>
                        </div>
                    </div>
            </div>
            <div className = {style.card}>

                <div className = {style.cardText}>
                    <div className = {style.cardTextWrapper}>
                    <p>
                    "The best charter I've ever been on. Captain Bill and mate Willy are very professional, knowledgeable and personable. They knew how to find the fish and they kept us on them all day.  They offered us drinks and snacks and made us feel at home. I'm looking forward to going out for Tuna with Basslines Sportfishing."
                    </p>
                    <b>
                        - Elliot Harvey
                    </b>
                    </div>
                </div>
                    <div className = {style.cardImgOne}></div>
            </div>

           <div className = {style.card}>
               <div className = {style.cardImgtwo}></div>

               <div className = {style.cardText}>
                    <div className = {style.cardTextWrapper}>
                   <p>
                   "Went out today with some  buddies experience ranged from mostly beginners to a few of us that have fished striped bass before. Captain Bill and his first mate son Willy were welcoming from the very beginning. Their knowledge and experience was evident early on as they showed us different techniques and found the perfect spots for us to get into some big fish. Everyone in the group caught a fish we had 5 keepers for striped bass and a member of the group caught a 42 inch that we had to release because he was too big. Got some bluefish on board as well. The friendly atmosphere and patience they showed made it a memorable experience for all. Bill and Willy are all you can ask for in a chartered boat experience. Can't wait for my next trip with them and couldn't recommend them highly enough."
                   </p>
                   <b>
                       -Ryan Naczi
                   </b>
               </div>
               </div>
           </div>

           <div className = {style.button}>
               <h1><a href = "crew">Meet Our Crew</a></h1>

           </div>
            
        </div>


    )
}

export default HomePageIntro;
