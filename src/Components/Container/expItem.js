import React from "react";
import {StylePointsExp} from "./experience";


export default function ExpItem({item}){
return(
<div className="d-flex flex-raw mt-3">
    <div className="d-flex flex-column gap-3" style={{width: "20%"}}>
        <p>{item.years}</p>
        <div className="d-flex flex-raw">                
        </div>
    </div>
    <div className="d-flex flex-column gap-3" style={{width: "60%"}}>
    <div className="d-flex flex-raw gap-3" style={{marginBottom: "none"}}>
        <line className="w-30" style={StylePointsExp}></line>
        <div>
            <p style={{fontSize: "18px", marginBottom: "5px"}}>{item.name}</p>
            <p style={{marginBottom: "0px"}}>{item.country}, {item.city}</p>
        </div>              
    </div>
        <p>{item.requires}</p>
    </div>
</div>
)
}
