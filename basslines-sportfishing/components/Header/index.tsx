import React from 'react';
import style from './Header.module.scss';

const Header: React.FC =() =>{
    return(

        <div>

            <div className={style.headerParent}>
                <span className ={style.HeaderLogo}>
                    <img src = "/basslineslogo.PNG" alt="Bass Lines logo"></img>
                </span>
                <span className={style.HeaderButtonWrapper}>
                    <a href = "/">
                    <div className={style.HeaderButton}>
                    Home
                    </div>
                    </a>
                    <a href = "crew">
                        <div className={style.HeaderButton}>
                        Meet The Crew 
                        </div>
                    </a>
                    <a href = "OurBoat">
                    <div className={style.HeaderButton}>
                    Our Boat
                    </div>
                    </a>
                    <a href = "OurTrips">
                    <div className={style.HeaderButton}>
                     Gallery
                    </div>
                    </a>
                    <a href ="Report">
                    <div className={style.HeaderButton}>
                    Fishing Report 
                    </div>
                    </a>
                    <a href ="BookATrip">
                    <div className={style.HeaderButton}>
                    Book a trip 
                    </div>
                    </a>
                </span>
            </div>

            <div className={style.headerContentSpacer}></div>

        </div>
            
            

           
   
    )
};

export default Header;
