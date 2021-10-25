import React, {Fragment} from "react";
import "./Heading.css"
const Heading = (props)=>{
    return(
        <Fragment>
            <div>
                <p className="heading">{props.home}</p>
            </div>
        </Fragment>
    )
}
export default Heading;