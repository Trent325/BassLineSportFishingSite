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
                    <div className={style.HeaderButton}>
                        Home
                    </div>
                    <div className={style.HeaderButton}>
                        Meet The Crew
                    </div>
                    <div className={style.HeaderButton}>
                        Our Boat
                    </div>
                    <div className={style.HeaderButton}>
                        Reviews
                    </div>
                </span>
            </div>

            <div className={style.headerContentSpacer}></div>

        </div>
            
            

           
   
    )
};

export default Header;
