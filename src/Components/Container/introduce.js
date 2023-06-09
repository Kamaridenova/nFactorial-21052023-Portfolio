import {Name} from "../navbar";
import React from "react";

 export default function Intro(){
    return(
    <div className="d-flex flex-column mt-5" style={{width: "100%", justifyContent: "flex-start", paddingBottom: "100px", color: "wheat"}}>
        <div className="d-flex flex-column mt-5" style={{justifyContent: "flex-start"}}>
            <h2 style = {{fontSize: "60px"}}>Hi, I'm {Name}, </h2>
            <h2 style = {{fontSize: "60px"}}>I build things for the web.</h2>  
        </div>
       <div className="d-flex flex-column mt-3">
        <p style={{fontSize: "20px"}}>I’m software developer and this is my portfolio.</p>
        <div className="d-flex flex-column" style={{paddingTop: "16px",
            paddingBottom: "24px"}}>
            <button 
            style={{backgroundColor: "#FD5A14",
            width: "200px",
            height: "56px",
            borderRadius: "2px",
            paddingTop: "16px",
            paddingBottom: "24px",
            fontWeight: "700",
            color: "wheat"
            }}>Check out my CV
            </button>
        </div>
        
       </div>
       
    </div>
    )
}

// style = {{fontSize: "20px"}}
// style={{fontSize: "20px"}}