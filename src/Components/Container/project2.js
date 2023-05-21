import { CODE_IMG } from "../assets";
import { StylePointsAboutMe } from "./AboutMe";


export default function ProjectMediaAsMedium(){
    return(
                <div className="d-flex flex-raw" style={{marginTop: "40px", marginBottom: "50px", justifyContent: "space-between", alignSelf: "center"}}>    
        <div className="d-flex flex-column" style = {{width: "50%"}}>
            <h2>Weekly Projects</h2>
            <p style={{marginTop: "20px"}}>
            During 6 weeks at nFactorial School I studied web programming.
There are several projects developed by using HTML, CSS, React-app and Hooks.
            </p>
                <div className="d-flex flex-raw gap-3">
                    <div className="d-flex flex-raw gap-3" style={{width: "7%"}}>
                        <line style={StylePointsAboutMe}></line>
                    </div>
                    <p style={{color: "wheat", marginBottom: "20px"}}>To Do List</p>
                </div>
                <div className="d-flex flex-raw gap-3">
                    <div className="d-flex flex-raw gap-3" style={{width: "7%"}}>
                        <line style={StylePointsAboutMe}></line>
                    </div>
                    <p style={{color: "wheat", marginBottom: "20px"}}>This portfolio</p>
                </div>
        </div>
        <img style={{width: "40%", alignItems: "center", border: "3px #FD5A14 solid"}} src={CODE_IMG}/>
    </div>
    )
}