import './RightLayout.css'
import React, {Component} from "react";
import CommentLayout from "./comment/CommentLayout";
import PatientField from "./patientField/PatientField";



export default class RightLayout extends Component {
    render() {
        return (
            <div className={"right"}>
                <PatientField/>
                <CommentLayout/>
            </div>
        )
    }
}