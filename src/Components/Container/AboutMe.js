import React from "react";
import { PHOTO_IMG } from "../assets";


export const StylePointsAboutMe = {
    display: 'flex', 
    width: '22px',
    height: '22px',
    // width: "10%",
    background: "grey",
    borderRadius: '10px',
    // border: 'none',
    // color: 'white',
    // padding: "8px 24px",
    // gap: "28px",
    fontWeight: "500",
    fontSize: "16px"
}

export default function AboutMe(){
    return(
        <div id = "aboutMe" className="d-flex flex-column mt-3" style={{width: "100%", justifyContent: "flex-start", marginBottom: "100px"}}>
            <div className="d-flex flex-raw" style={{justifyContent: "space-between"}}>
            
            <div className="d-flex flex-column" style={{width: "60%", justifyContent: "flex-start"}}>
            <h2 style = {{fontSize: "60px", alignItems: "center", marginBottom: "30px"}}>About me</h2>
                <p style={{fontSize: "20px"}}>I’m going to be a software developer and this is my portfolio.</p>
                <p style={{fontSize: "20px"}}>I’m an oil engineer. Now my work concerns development of digital software in oil and gas. So I started to study programming</p>
            <div className="d-flex flex-raw gap-5">
                <div className="d-flex flex-column" style={{alignSelf: "center"}}>
                    <div className="d-flex flex-raw gap-3">
                        <div className="d-flex flex-raw gap-3" style={{width: "7%"}}>
                            <line style={StylePointsAboutMe}></line>
                        </div>                   
                        <p style={{color: "wheat"}}>Work and analysis big geological and production well data</p>
                    </div> 
                    <div className="d-flex flex-raw gap-3">
                        <div className="d-flex flex-raw gap-3" style={{width: "7%"}}>
                        <line style={StylePointsAboutMe}></line>
                        </div>
                        <p style={{color: "wheat"}}>The desire to use modern technologies, including IT</p>                
                </div>
                </div>              
               <div className="d-flex flex-column gap-3">
                <div className="d-flex flex-raw gap-3">
                    <div className="d-flex flex-raw gap-3" style={{width: "7%"}}>
                        <line style={StylePointsAboutMe}></line>
                    </div>
                    
                    <p style={{color: "wheat", marginBottom: "20px"}}>Сlose work with programmers</p>
                </div>
                <div className="d-flex flex-raw gap-3">
                    <div className="d-flex flex-raw gap-3" style={{width: "7%"}}>
                        <line style={StylePointsAboutMe}></line>
                    </div>
                    <p style={{color: "wheat"}}>I take a part in a huge team for development of new digital product</p>
                </div> 
               </div>
            </div>
            </div>
            <div>
                <img style={{alignItems: "center", border: "3px #FD5A14 solid"}} src={PHOTO_IMG}/>
            </div>
            </div>
        </div>
    )
};