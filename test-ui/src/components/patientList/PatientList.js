import './PatientList.css';
import React, {useEffect, useState} from "react";
import {getPatients} from "../api"
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";
const PatientList = (props) => {
    const [selectedPatient, setSelectedPatient] = useState("");
    const [patients, setPatients] = useState([]);
    const [finishedLoading, setFinishedLoading] = useState(false);

    useEffect(()=>{
        getPatients((data) => {
        setPatients(data);
        setFinishedLoading(true);
        })

    },[props.reload]);
    const getFilteredPatients = () => {
        return patients.filter(p => {
            const filter = props.filter.toLocaleLowerCase();
            return p.firstName.toLocaleLowerCase().includes(filter) || p.lastName.toLocaleLowerCase().includes(filter)
        })
    }
    const handleSelectPatient = (event, patient) => {
        console.log(patient)
        event.preventDefault();
        if (selectedPatient === patient){
            setSelectedPatient(null)
        } else {
            setSelectedPatient(patient);
            props.setPatient(patient);
        }
    }
    return (
        <div className="patientList">
            {patients.length > 0 && getFilteredPatients().length > 0 ? getFilteredPatients().map((patient) =>
                <div className={selectedPatient && patient.uniqueId === selectedPatient.uniqueId ? "patientContainer selected" : "patientContainer"}
                     onClick={(event) => handleSelectPatient(event, patient)}>
                    <p style={{fontSize:16}}>{patient.firstName} {patient.lastName}</p>
                    <p style={{fontSize:12}}>{patient.address}</p>
                </div>

            ) :
                (patients.length > 0 && getFilteredPatients().length === 0) || (patients.length === 0 && finishedLoading) ?
                    <p>No records found</p> :
                <Dots/>}
        </div>

    );
}
export default PatientList;