import React from "react";
import { useState } from "react";

function ListItem(props) {
    const [details, setDetails] = useState({show: false})

    function toggleDetails(){
        if(details.show == true){
            setDetails({show: false})
        }else if(details.show == false){
            setDetails({show: true})
        }
    }

    function renderDetails(detailText){
        if(details.show == true){
            return <p>{detailText}</p>
        }
    }
    return (
        <li key={props.k}
            >
            <div style={{display: "flex"}}>
                <p id="term">{props.text}</p>
                <button 
                    onClick={e => toggleDetails(e)}
                    style={{
                        width: "30px", 
                        height: "30px",
                        padding: "0px",
                        marginLeft: "10px",
                        marginTop: "auto",
                        marginBottom: "auto"
                    }}
                >?</button>
                <button 
                    onClick={e => props.favHandler(e)}
                    style={{
                        width: "30px",
                        height: "30px",
                        padding: "0px",
                        marginLeft: "10px",
                        marginTop: "auto",
                        marginBottom: "auto"
                    }}
                >{props.innerText}</button>
            </div>
            {renderDetails(props.detailText)}
        </li>
    )
}

export default ListItem