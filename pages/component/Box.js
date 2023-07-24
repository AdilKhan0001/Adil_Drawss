
export default function Box(props) {
    return (
        <div className={`d-flex flex-column gap-3 ${props.imgClass}`} style={{paddingLeft:"50px", paddingTop:"100px", paddingBottom:"20px"}}>
            <span style={{ fontSize: "24px", fontWeight: "400", lineHeight: "171.687%", letterSpacing: "1.2px", fontStyle: "normal" }}>
            {props.heading1}
            </span> 
            <span style={{ fontSize: "70px", fontWeight: "800", lineHeight: "171.687%", letterSpacing: "3.5px", fontStyle: "normal" }}>
                {props.heading2}
            </span>

            <span style={{ width: "570px", fontSize: "15px", fontWeight: "400", lineHeight: "171.687%", letterSpacing: "0.75px", fontStyle: "normal" }}>
                {props.heading3}
            </span>
            <button style={{width:"160px", fontSize:"20px",lineHeight:"171.687%",color:"white", backgroundColor:"#404040", height:"45px"}}>
                View More
            </button> 
        </div>
    )
}


