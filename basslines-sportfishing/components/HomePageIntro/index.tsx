import React from "react";
import style from "./HomeIntro.module.scss";

const HomePageIntro: React.FC =() => {
    return(
        <div>
            <div className = {style.img}>
                <div className = {style.imgWrapper}>
                
                </div>
            </div>
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
                    We are a fishing charter specializing in fishing excursions targeting striped bass in the bay and ocean as well as offshore trips targeting primarily tuna fish, mahi mahi, tile fish and shark. We can accommodate up to six guests and cater to every skill level.
                </span>   
            </span>
            <div className = {style.card}>
                <div className = {style.cardImg}>
                    
                </div>
                <div className = {style.cardText}>

                </div>

            </div>
        </div>

    )
}

export default HomePageIntro;
