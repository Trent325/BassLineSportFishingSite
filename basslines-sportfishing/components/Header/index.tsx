import React, {useState} from 'react';
import style from './Header.module.scss';

const Header: React.FC =() =>{

    //Use useState to control the status of the header
    const [mobileShow, setMobileShow] = useState(false);

    return(

        <div>

            <div className={style.headerParent}>
                <div className={style.FlexBox}>
                        <div className = {style.boxCol}>
                            <div className ={style.HeaderLogo} >
                                <img src = "/basslineslogo.PNG"></img>                           </div>
                            </div>
                    <div className = {style.boxCol}>
                        <div className={style.mobileButton} onClick={() => setMobileShow(!mobileShow) }>
                            <div className={style.hamLine}></div>
                            <div className={style.hamLine}></div>
                            <div className={style.hamLine}></div>  
                        </div>
                </div>
                
                <div className={mobileShow ? style.HeaderButtonWrapperOpen : style.HeaderButtonWrapper}>
                    <a href = "/" className={style.HeaderButton}>
                        Home
                    </a>
                    <a href = "crew" className={style.HeaderButton}>
                        Meet The Crew
                    </a>
                    <a href = "OurBoat" className={style.HeaderButton}>
                        Our Boat
                    </a>
                    <a href = "OurTrips" className={style.HeaderButton}>
                        Gallery
                    </a>
                    <a href ="Report" className={style.HeaderButton}>
                        Fishing Report
                    </a>
                    <a href ="BookATrip" className={style.HeaderButton}>
                        Book a trip
                    </a>
                </div>
                
            </div>
            </div>

            <div className={style.headerContentSpacer}></div>

        </div>
            
            

           
   
    )
};

export default Header;
