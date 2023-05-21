import { StylePointsAboutMe } from "./AboutMe"
import ExpItem from "./expItem"

export const StylePointsExp = {
    display: 'flex', 
    width: '22px',
    // width: "3vh",
    height: '22px',
    background: "#FD5A14",
    borderRadius: '10px',
    fontWeight: "500",
    fontSize: "16px"
}
export default function Experience(){
    const work = [
        { 
            years: "2020-2023",
            name: 'Leading Engineer of the Geology and Development Service',
            country: "Kazakhstan",
            city: "Astana",
            requires: "Systematization and preparation of raw materials for the extraction, exploitation of deposits for data download into 'ABAI' information system"
        },
        { 
            years: "2014-2020",
            name: 'Chief Field Development Specialist of the Department of Geology and Field Development',
            country: "Kazakhstan",
            city: "Almaty",
            requires: "Preparation of technical documentation, documentation support of the work performed by the department. Control over the performance of works, fulfillment of contractual obligations by contractors"
        },
        { 
            years: "2010-2014",
            name: 'Category I Engineer of the Hydrodynamic Modeling Department',
            country: "Kazakhstan",
            city: "Atyrau",
            requires: "Collection, processing and analysis of field materials from old and newly drilled production wells. Compiling a database, updating the database.Preparation of source files for model adaptation"
        }
    ]
return(
    <div id = "exper" className="d-flex flex-column" style={{width: "100%", justifyContent: "flex-start", paddingBottom: "60px", color: "wheat"}}>
        <h2 style = {{paddingBottom: "30px", fontSize: "60px"}}>Experience</h2>
        {work.map((item, index) => <ExpItem item={item} key={index}/>)}
    </div>
)
}