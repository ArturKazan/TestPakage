import './RightLayout.css'
import React, {Component} from "react";
import CommentLayout from "./comment/CommentLayout";
import PatientField from "./patientField/PatientField";



const RightLayout = (props) => {
        return (
            <div className={"right"}>
                <PatientField patient={props.patient} setShow = {props.setShow} setMode = {props.setMode}/>
                <CommentLayout patientId = {props.patient !== null ? props.patient.uniqueId : null}/>
            </div>
        )
}
export default RightLayout;