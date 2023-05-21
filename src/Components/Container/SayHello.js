

export default function SayHello(){
    return(
    <div id = "contacts" className="d-flex flex-column mt-5" style={{width: "100%", justifyContent: "flex-start", paddingBottom: "100px", color: "wheat"}}>
        <div className="d-flex flex-column mt-5" style={{justifyContent: "flex-start"}}>
            <h2 style = {{fontSize: "60px"}}>Hello, my friends!</h2>
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
            }}>Get In Touch
            </button>
        </div>
        
       </div>
       
    </div>
    );
}