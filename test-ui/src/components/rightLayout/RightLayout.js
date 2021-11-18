import './RightLayout.css'
import React, {Component} from "react";
import CommentLayout from "./CommentLayout";
import PatientField from "./PatientField";



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