import React from "react";
import style from "./Gallery.module.scss";

const Gallery: React.FC =() => {
    return(

        <div>
            
            <div className = {style.container}>
                
                <div className ={style.containerImg}>
                </div>
         
                <div className ={style.containerImg1}>
                </div>
                

                <div className ={style.containerImg2}>
                </div>
                
                
            </div>
            <div className = {style.container}>
                <div className = {style.containerImg12}></div>
                <div className = {style.containerImg13}></div>
                <div className = {style.containerImg15}></div>

            </div>

            <div className = {style.container}>
                <div className = {style.containerImg3}></div>
                <div className = {style.containerImg4}></div>
                <div className = {style.containerImg5}></div>


            </div>

            

            <div className = {style.container}>
                <div className = {style.containerImg6}></div>
                <div className = {style.containerImg7}></div>
                <div className = {style.containerImg8}></div>


            </div>

            

            <div className = {style.container}>
                <div className = {style.containerImg9}></div>
                <div className = {style.containerImg10}></div>
                <div className = {style.containerImg11}></div>


            </div>
            <div className = {style.container}>
                <div className = {style.containerImg17}></div>
                <div className = {style.containerImg16}></div>
                <div className = {style.containerImg14}></div>


            </div>

           
            <div className = {style.button}>
               <h1><a href = "BookATrip">Book A Trip</a></h1>
               

           </div>
            
      
        </div>
        

    );

};

export default Gallery;