import React from 'react';
import style from './BoatPageIntro.module.scss';

const BoatPageIntro: React.FC =() =>{

    return(
        <div>
        
                <div className={style.cardImg}></div>
                <div className = {style.cardText}>
                    <div className = {style.cardtextyBox}>
                        <h1>Check Out Our Boat</h1>
                        <p>
                        Basslines is a very well-equipped Century z3200 Center Console with twin 250 Yamahas. The
                        boat cruises comfortably at 30 miles per hour and
                        top speed is 45 miles per hour. This boat holds 320
                        gallons of fuel allowing no range limit to our
                        offshore trips. With a total length of 32 feet and a
                        beam of 10 feet 6 inches this boat is extremely
                        stable and comfortable for all ages. A toilet, 30
                        gallons of fresh water, sinks, and a bunk in the
                        cabin are just a few of the many creature comforts
                        that make every trip more enjoyable. This boat also has the latest in safety and
                        electronics, Garmin 3010C chartplotter / radar / color fishfinder / offshore
                        weather service and ICOM boat VHF radio. Also, an Epirb, rescue life raft, and
                        satellite phone.
                        </p>
                    
                </div>
                </div>

                <div>
                <div className = {style.container}>

                    <div className = {style.containerImg}> </div>
                    <div className = {style.containerTwo}> </div>

                </div>
                    
                </div>

                <div className = {style.button}>
               <h1><a href = "OurTrips">Look At Our Trips</a></h1>

           </div>
            
                
            
        </div>
        );

    };
    
export default BoatPageIntro;