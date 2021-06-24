import React from "react";
import style from './DroneShot.module.scss';

const DroneShot: React.FC =() => {
    return(
        <div className = {style.headerUnit}>
            <div className={style.videoContainer}>
                <video className={style.video} autoPlay muted loop>
                    <source src = "basslines.mp4" type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
};

export default DroneShot;