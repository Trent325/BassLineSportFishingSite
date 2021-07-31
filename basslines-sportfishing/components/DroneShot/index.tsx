import React from "react";
import style from './DroneShot.module.scss';

const DroneShot: React.FC =() => {
    return(
        <div className = {style.headerUnit}>
            <div className={style.videoContainer}>
                <video className={style.video} autoPlay muted loop playsInline>
                    <source src = "basslines.mp4"   type="video/mp4"></source>
                </video>
                <div className={style.landingContainerContainer}>
                    <div className={style.landingContainerText}>
                        <h1 className={style.landingContainerTextHeading }>BassLines Sport Fishing</h1>
                    </div>
                    <div className={style.landingContainerText}>
                        <h1 className={style.landingContainerTextSubheading}>Jersey Shore Fishing Charter</h1>

                    </div>


                </div>
            </div>
        </div>
    )
};

export default DroneShot;