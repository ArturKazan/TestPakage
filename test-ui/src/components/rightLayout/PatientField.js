import React from "react";
import "./PatientField.css";

const PatientField = () => {
    const patient = {
        firstName: "Hello",
        lastName: "World",
        sex: 0,
        address: "Random street, 0, 1"

    }
    return (
        <div>
            <div className={"patientHeader"}>
                <h3>{patient.lastName + "," +patient.firstName}</h3>
            </div>
            <div>
                <h4>General Info: </h4>
                <h5>Address : {patient.address}</h5>
            </div>
        </div>
    )
}
export default PatientField;