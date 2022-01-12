import React, {useEffect, useState} from "react";
import "./Modal.css";
import { createPatient, updatePatient } from "../api";


const Modal = props =>{
    const [patient,setPatient] = useState({
        firstName: '',
        lastName: '',
        birthDate:'',
        sex:true,
        country:'',
        address:'',
        state:''
    });
    useEffect(()=>{
        if (props.mode === "EDIT"){
            setPatient(props.patient);
        }
    },[props.mode])
    const clearValue =(patient)=> {
        patient.firstName = '';
        patient.lastName = '';
        patient.birthDate = '';
        patient.sex = '';
        patient.country = '';
        patient.address = '';
        patient.state = '';

    }
    if (!props.show){
        return null
    }
    return(
        <div className={"modal"}>
            <div className={"modal-content"}>
                <div className={"modal-header"}>
                    <h4 className={"modal-title"}>Create Patient</h4>
                </div>
                <div className={"modal-body"}>
                    <form>
                        <div>
                            <label>
                                First name:
                            </label>
                            <input value={patient.firstName} onChange={(event) => {
                                event.preventDefault();
                                setPatient({...patient, firstName: event.target.value})
                            }}/>
                        </div>
                        <div>
                            <label>
                                Last name:
                            </label>
                            <input value={patient.lastName} onChange={(event) => {
                                event.preventDefault();
                                setPatient({...patient, lastName: event.target.value})
                            }}/>
                        </div>
                        <div>
                            <label>
                                Birth Date:
                            </label>
                            <input type="date" value={patient.birthDate} onChange={(event) => {
                                event.preventDefault();
                                setPatient({...patient, birthDate: event.target.value})
                            }}/>
                        </div>
                        <div>
                            <label>
                                Sex:
                            </label>
                            
                            <select value={patient.sex} onChange={(event) => {
                                event.preventDefault();
                                console.log(event.target.value)
                                setPatient({...patient, sex: event.target.value})
                            }}>
                                       <option value={true}>Male</option>
                                        <option value={false}>Female</option>
                            </select>
                        </div>
                        <div>
                            <label>
                                Country:
                            </label>
                            <input value={patient.country} onChange={(event) => {
                                event.preventDefault();
                                setPatient({...patient, country: event.target.value})
                            }}/>
                        </div>
                        <div>
                            <label>
                                Address:
                            </label>
                            <input value={patient.address} onChange={(event) => {
                                event.preventDefault();
                                setPatient({...patient, address: event.target.value})
                            }}/>
                        </div>
                        <div>
                            <label>
                                State:
                            </label>
                            <input value={patient.state} onChange={(event) => {
                                event.preventDefault();
                                setPatient({...patient, state: event.target.value})
                            }}/>
                        </div>
                    </form>
                </div>
                <div className={"modal-footer"}>
                    <button onClick={props.onClose} className={"button"}>Close</button>
                    <button onClick={() => {
                        if (props.mode === "ADD"){
                        createPatient((data) => {alert(data.firstName)}, patient);
                        } else {
                            updatePatient((data) => {alert(data.firstName)}, patient);
                        }
                        props.onClose();
                        clearValue(patient);
                    }} className={"button"}>Save</button>
                </div>
            </div>
        </div>
    )
}
export default Modal;