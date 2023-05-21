// import React, {useEffect, useState} from 'react';
export const Name = "Gaukhar";



export default function NavBar() {
  
    return(
        <div
         className="d-flex flex-raw" style={{width: "100%", justifyContent: "space-between", borderBlockColor: "none"}}>
            <div className="d-flex flex-raw align-items-start">
                <h2>{Name}</h2>  
            </div>
             
            <div className="d-flex flex-raw" style={{width: "50%", justifyContent: "flex-end", gap: "14px", alignItems: "center", paddingTop: "5px"}}>
                {/* <p><a href="#aboutMe">About<a/></p> */}
                <p style={{color: "wheat"}}><a href="#aboutMe">About</a></p> 
                <p><a href="#exper">Experience</a></p>
                <p><a href="#projects">Projects</a></p>
                <p><a href="#contacts">Contacts</a></p>

            </div>
        </div>
    );
}
