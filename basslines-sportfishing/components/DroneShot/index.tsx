import React from "react";
import style from './DroneShot.module.scss';

const DroneShot: React.FC =() => {
    return(
        <div className ={style.video}>  
            <video src = "../CharterVideo.mp4" className={style.videoIteslf} autoPlay muted loop playsInline></video>
        </div>
    )
};

export default DroneShot;