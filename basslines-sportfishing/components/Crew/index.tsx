import React from "react";
import style from "./Crew.module.scss";

const Crew: React.FC = () => {
    return(
        <div className={style.parent}>
            <div className={style.card}>
                <div className={style.cardCol}>
                    <div className={style.imageWrapper}>
                        <img src="willy.jpg" alt="Picture of Captain Willy"/>
                    </div>
                </div>
                <div className={style.cardCol}>
                    <div className={style.cardText}>
                        <h2>Your Mom</h2>
                        <h3>Owner and Boat Captain</h3>
                        <p>
                            This person is the biggest bitch of the seves seas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crew;