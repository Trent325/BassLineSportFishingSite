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
            <span className = {style.charter}>
                <span className = {style.textWrapperHeader}>
                    <p>
                    We are a fishing charter specializing in fishing excursions targeting striped bass in the bay and ocean as well as offshore trips targeting primarily tuna fish, mahi mahi, tile fish and shark. We can accommodate up to six guests and cater to every skill level.
                    </p>
                </span>   
            </span>
            <div className = {style.card}>
                <div className = {style.cardImg}>    
                </div>
                    <div className = {style.cardText}>
                        <p>
                        Went out for a striper charter in Perth Amboy on a day where it was fairly windy. Soon I completely forgot how windy and cold it was because there was a fish on just about all the time. Started with trolling which was the most successful and I think the quickest we hooked a fish was 20ft. Soon moved on to casting and jigging which was not as successful but still some of the most exciting fishing of my life constant action. For my first time ever striper fishing captain Will made a challenging task easy and enjoyable, the boat caught well over 30 striper in a 5 hour period, guy really knows his stuff, will be a fishing trip I will always remember and the first of many with a great charter crew.
                        </p>
                    </div>
            </div>
            <div className = {style.card}>

                <div className = {style.cardText}>
                    <p>
                    I’ve been on a few trips with Bassline Sportsfishing and Captain Bill always found the fish for us. His mate Will is a fantastic crew member, he’s helpful, energetic and very personable. I don’t fool around with guides and charters that don’t produce. That’s why I highly recommend Bassline Sportsfishing. Tight lines
                    </p>
                </div>
                    <div className = {style.cardImgOne}></div>
            </div>
        </div>

    )
}

export default HomePageIntro;
