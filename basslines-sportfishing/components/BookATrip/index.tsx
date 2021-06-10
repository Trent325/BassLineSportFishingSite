import React from "react";
import style from "./BookATrip.module.scss";

const BookATrip: React.FC =() => {
    return(
        <div>
            <div className = {style.intro}>
                <p>
                    Before You Come On Board...
                </p>
            </div>



            <div className = {style.Before}>
                <div className = {style.WhatToBring}>
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
                <div className = {style.charterPolicy}>
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
            <div className = {style.intro}>
                <p>
                    Lets Go Fishing
                </p>
            </div>

            <div className = {style.formContainer}>

            </div>

        </div>
    )
    };

    export default BookATrip;