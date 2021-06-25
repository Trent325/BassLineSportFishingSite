import React from 'react';
import style from './Footer.module.scss';

const Footer: React.FC =() =>{

    return(
        <div>
            <div className = {style.FooterParent}>
                <div className={style.footerCol}>
                    <span className = {style.FootLogo}>
                        <img src = "/boatLogo.png" alt = "Bass Lines Boat Logo"></img>
                    </span>
                    <span className = {style.fbLogo}>
                        <a href = "https://www.facebook.com/Basslines.Sportfishing.charters/"><img src="/Facebook-logo.png"></img></a>
                    </span>
                    <span className = {style.fbLogo}>
                        <a href = "https://www.instagram.com/basslines.sportfishing/?hl=en"><img src="/instalogo.png"></img></a>
                    </span>
                </div>
                <div className={style.footerCol}>
                    <span className = {style.contact}>
                        Contact us : <a href="tel:12019066847">(201)-906-6847</a>
                    </span>
                </div>
            </div>
        </div>

    );

};

export default Footer;