import React from "react";
import style from "./CrewIntro.module.scss";

const CrewIntro: React.FC =() => {

    return(

        <div>
            <div className={style.header}>
                Meet New Jersey's Best Father and Son Duo   
            </div>
            <div className = {style.Box}>
                <div className ={style.body}>
                Captain Bill and his son Captain Willy have been fishing all over the coast of New Jersey for the entirety of both of their lives. They are a perfect example of the saying ‘the apple does far from the tree’ Bill and his son both share a passion for fishing. It does not matter if you are an avid angler or are looking to get on the water for some family fun, they got it covered.
                </div>
            </div>
        </div>


        
    )
};

export default CrewIntro;