import React from 'react'
import { Link } from 'react-router-dom'

export default function Alert(props) {
    
    return (
        <>
        <div style={{height:'80px'}}>
            {props.alert===null?<></>:
            <div className="alert alert-success" role="alert">
            Text {props.alert.msg} Press OK to continue. 
                <div><Link to="/about" className="alert-link" >OK</Link></div>
            </div>}
        </div>
    
        </>
    )
}
