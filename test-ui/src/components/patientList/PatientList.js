import './PatientList.css';
import React, {useEffect, useState} from "react";
import {getPatients} from "../api";
import { render } from "react-dom";

import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";
const PatientList = () => {
    const [patients, setPatients] = useState([]);
    useEffect(()=>{
        getPatients((data) => setPatients(data))
    },[]);
    return (
        <div className="PatientList">
            {patients.length > 0 ? patients.map((patient) =>
                <div style={{height: 40, width:217, color:"#000000", border: "4px double black",background: "#fc3"}}>
                    <p style={{fontSize:12,height:5, marringBottom:0}}>{patient.firstName} {patient.lastName}</p>
                    <p style={{fontSize:8}}>{patient.adress}</p>

                </div>

            ) : <Dots/>}
        </div>

    );
}
export default PatientList;