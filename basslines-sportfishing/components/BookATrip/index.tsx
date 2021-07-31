import React, {useState, FormEvent} from "react";
import style from "./BookATrip.module.scss";
import axios from "axios"
import formidable from 'formidable';


function BookATrip() {
    

        return(

        <div>
            <div className = {style.intro}>
                <div className = {style.landingContainerContainer}>
                    <div className = {style.landingContainerText}>
                    <h1 className = {style.landingContainerTextSubheadingT}>
                
                    Before You Come On Board... </h1>

                    </div>
                </div>
            </div> 
                 
                

            <div className = {style.Parent}>
                <div className = {style.Box}>
                        <h1>What To Bring</h1>
                        <p>
                            <li>Sunglasses</li>
                            <li>Sunscreen</li>
                            <li>Raingear</li> 
                            <li>Sea Sickness Pills</li>
                            <li>Cooler to Bring Home Catch</li>
                            <li>Food and Beverages (No hard alcohol, Beer is
                                acceptable)</li> 
                        </p>
                    </div>
                  
                <div className = {style.Box}>
                    
                        <h1>Charter Policy</h1>
                        <p>
                            <li>Cancellations caused by weather are to be rebooked at a later date agreed upon by both
                            parties. Rain is not a reason for cancellation. Cancellations of any charter due to
                            weather reasons are to be determined only by the Captain.</li>
                            <li>Customer cancellations of a booked charter need a minimum of 10 days notice.</li>
                            <li>15-20% is customary tipping policy for hard working, knowledgeable, and friendly mate.</li>
                            <li>Over intoxication will not be tolerated and will result in an immediate conclusion of the
                            trip.</li>
                            <li>No illegal drugs or hard alcohol (Beer is acceptable).</li>
                            <li>Please be advised if you book a full charter and not all crew members arrive you are still
                            responsible for the full fair.</li>
                        </p>
                    
                </div>
            </div>
            <div className = {style.Trips}>
                <div className = {style.landingContainerContainer}>
                    <div className = {style.landingContainerText}>
                    <h1 className = {style.landingContainerTextSubheadingT}>
                
                    Trips We Offer</h1>

                    </div>
                </div>
            </div>

            <div className = {style.Parent}>
                <div className = {style.Box}>
                    <h1>March-June</h1>
                    We Will be sailing out of Harbor Side Marina. These trips will be 8 hours and are limited to six people. The striped bass fishery in the Raritan had been phenomenal for us over the years. We target these fish primarily with live bait, trolling and casting artificial lures. These trips are a great experience and family friendly. 

                    <h1>June-Fall</h1>
                    The boat will be sailing out of Clarks Landing in Point Pleasant N.J. Our Mid shore trips are limited to 70 miles offshore and are multi species. Not only do we target tuna but we will also target Mahi Mahi, shark and bottom fish depending on the conditions. These trips are typically 12 hours and are quite the experience. You can expect to see whales dolphins and many other sea creatures.

                    <h1>Fall</h1>
                    In the fall, we fish for striped bass as they migrate south and pass through our local waters. Our season typically starts fishing off long island then as the fish travel south we travel south with them, eventually fishing off south jersey. We target fall bass with live bait and by trolling

                    <h1>Winter</h1>
                    In the winter months, we target giant seabass on our offshore wrecks. These trips produce seabass to 7+ pounds and a lot of them. Our wrecks we fish are 50+ miles offshore but it is well worth the trip!
                    Black Fish,

                    We target Black fish in wrecks from 20 feet of water to 80 feet. In our opinion, they are one of the hardest fighting fish pound for pound in the ocean, and taste great too. It is a blast to fish for them and we highly recommend this trip to anyone who has not tried it before.
                </div>
            </div>

            <div className = {style.PriceContainer}>
                <h1>
                    Prices
                </h1>
                <p>
                    <li>Bass trips out of Harbor Side Marina $850</li>
                    <li>Mid-Shore Tuna out of Clarks Landing $2100</li>
                    <li>Off-Shore (Canyons) out of Clarks Landing $2600</li>
                    <li>Black Fish out of Clarks Landing $950</li>
                    
                </p>
                
            </div>
            <div className = {style.Fishing}>
            <div className = {style.landingContainerContainer}>
                    <div className = {style.landingContainerText}>
                    <h1 className = {style.landingContainerTextSubheadingT}>
                    Lets Go Fishing</h1>
                
            
            </div>
                </div>
            </div>

            <div className = {style.substitueBox}>
                <p>
                    Contact us : <a href="tel:12019066847">(201)-906-6847</a>
                </p>
            </div>

            
            
        </div>
    )
    };

    export default BookATrip;