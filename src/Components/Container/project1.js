import { HAND_PEN_IMG } from "../assets";
import { StylePointsAboutMe } from "./AboutMe";


export default function ProjectToDoList(){
return(
<div id = "projects" className="d-flex flex-column mt-5" style={{marginBottom: "60px"}}>
    <h2 style = {{fontSize: "60px", alignItems: "center"}}>Projects I’ve Worked On at nFactorial School</h2>
    <div className="d-flex flex-raw" style={{marginTop: "40px", justifyContent: "space-between"}}>
        <img style={{width: "40%", alignItems: "center", border: "3px #FD5A14 solid"}} src={HAND_PEN_IMG}/>
        <div className="d-flex flex-column" style = {{width: "50%", 
        // alignSelf: "center",
        alignContent: "between",
        // justifyContent: "space-between"
        }}>
            <h2>Weekly Projects</h2>
            <p style={{marginTop: "20px"}}>
            During 6 weeks at nFactorial School I studied web programming.
There are several projects developed by using HTML, CSS.
            </p>
            <div className="d-flex flex-raw gap-3">
                    <div className="d-flex flex-raw gap-3" style={{width: "7%"}}>
                        <line style={StylePointsAboutMe}></line>
                    </div>
                    <p style={{color: "wheat", marginBottom: "20px"}}>Jumystap versions (desktop and mobile)</p>
                </div>
                <div className="d-flex flex-raw gap-3">
                    <div className="d-flex flex-raw gap-3" style={{width: "7%"}}>
                        <line style={StylePointsAboutMe}></line>
                    </div>
                    <p style={{color: "wheat", marginBottom: "20px"}}>Media as medium</p>
                </div>
        </div>
    </div>
</div>
)
}