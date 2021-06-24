import React from "react";
import style from "./Crew2.module.scss";

const Crew2: React.FC = () => {
    return(
        <div className={style.parent}>
            <div className={style.card}>
                <div className={style.cardCol}>
                    <div className = {style.imageWrapper}>
                    
                        <img src="willy.jpg" alt="Picture of Captain Bill"/>
                        </div>
                </div>
                <div className={style.cardCol}>
                    <div className={style.cardText}>
                        <div className={style.headerText}>Captain Willy</div>
                        <div className={style.body}>
                        Captain Willy has been on the water his entire life. It started off as going for little trips with dad to the boat and soon turned into something he could not live without. Not only does he love to fish, but he loves to lend a hand to anyone and everyone. Willy is truly one of the best Captains in New Jersey and is great with kids.                        </div>
                    </div>
                </div>

            </div>
            <div className = {style.button}>
               <h1><a href = "OurBoat">See Our Boat</a></h1>

           </div>
        </div>
    )
}

export default Crew2;