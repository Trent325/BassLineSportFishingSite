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
            <div className = {style.intro}>
                <p>
                    Lets Go Fishing
                </p>
            </div>

            

            <div className = {style.formContainer}>
                <form id="contact" method="POST" action="send" enctype="multipart/form-data">

                    <label htmlFor="Fname">First Name: </label>
                    <input type="text" name="Fname"></input>
                    <label htmlFor="lname">Last name:</label>
                    <input type="text" id="lname" name="lname"></input>

                    <div className = {style.formEmail}>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email"></input>
                    </div>

                    <div className = {style.formPhone}>
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" id="Phone" name="phone"></input>
                    </div>

                    <div className = {style.formWhatDoYouWantToGoFor}>
                        <h1> What Do You Want To Fish For</h1>
                        <input type="radio" id="Bass" name="Bass"></input>
                        <label htmlFor="male">Bass</label>
                        <input type="radio" id="MidShore" name="MidShore"></input>
                        <label htmlFor="MidShore">Mid-Shore Tuna</label>
                        <input type="radio" id="OffShore" name="OffShore"></input>
                        <label htmlFor="OffShore">Off-Shore Tuna</label>
                        <input type="radio" id="BlackFish" name="BlackFish"></input>
                        <label htmlFor="BlackFish">Black Fish</label>

                    </div>

                    <input type="submit" value="Submit"></input>
                </form>

            </div>

        </div>
    )
    };

    export default BookATrip;