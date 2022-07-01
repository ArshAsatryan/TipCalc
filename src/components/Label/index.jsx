import React from "react";
import './index.scss'

const Label = ({label, person}) => {
    return ( 
        <>
            <p className="label">
                {label}
            </p>
            {person && <span>
                {person}
            </span>}
        </>
     );
}
 
export default Label;