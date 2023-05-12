
export default function NavBar() {
    const Name = "Gaukhar";
    return(
        <div
         className="d-flex flex-raw" style={{width: "100%", justifyContent: "space-between", borderBlockColor: "none"}}>
            <div className="d-flex flex-raw align-items-start">
                <h2>{Name}</h2>  
            </div>
             
            <div className="d-flex flex-raw" style={{width: "50%", justifyContent: "flex-end", gap: "14px", alignItems: "center", paddingTop: "5px"}}>
                <p>About</p>
                <p>Experience</p>
                <p>Projects</p>
                <p>Contacts</p>

            </div>
        </div>
    )
}
// align-items-start