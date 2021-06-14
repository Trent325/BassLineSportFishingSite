import React from "react";
import style from "./Crew.module.scss";

const Crew: React.FC = () => {
    return(
        
            <div className={style.card}>
                <div className={style.cardCol}>
                    <div className={style.imageWrapper}>
                        <img src="CaptainBill.jpg" alt="Picture of Captain Bill"/>
                    </div>
                </div>
                <div className={style.cardCol}>
                    <div className={style.cardText}>
                        <div className = {style.Box}>
                        <div className={style.headerText}>Captain Bill</div>
                        <div className={style.body}>
                        Captain Bill has been fishing this area since he was a kid, so he knows the location of all the best fishing spots along the coast of New Jersey. With that map memorized, you could almost say he doesn’t need GPS. Bill has an enormous amount of fishing wisdom under his belt and a passion for sharing it. From teaching the youngers how to cast, to helping anglers secure every fish they hook, Bill can and will do it all while smiling ear to ear.
                        </div>
                    </div>
                </div>
                    
                </div>

            </div>
        
    )
}

export default Crew;