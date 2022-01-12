import React from "react";
import "./PatientField.css";

const PatientField = (props) => {
    return (
        props.patient !== null ? 
        <div>
            <div className={"patientHeader"}>
                <h3>{props.patient.lastName + "," + props.patient.firstName}</h3>
                <button style={{width:200,height:50}} onClick={(event) => {
                event.preventDefault();
                props.setMode("EDIT");
                props.setShow(true);
            }}>Edit Patient</button>
            </div>
            <div>
                <h4>General Info: </h4>
                <h5>Sex : {props.patient.sex ? "Male" : "Female" }</h5>
                <h5>Bitrhday : {props.patient.birthDate}</h5>
                <h5>Country : {props.patient.country}</h5>
                <h5>State : {props.patient.state}</h5>
                <h5>Address : {props.patient.address}</h5>
            </div>

        </div> : <div></div>
        
    )
}
export default PatientField;