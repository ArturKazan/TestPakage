import React, {useState} from "react";
import "./Modal.css";
import { createPatient } from "../api";
const Modal = props =>{
    const [patient,setPatient] = useState({
        firstName: '',
        lastName: '',
        birthDate:'',
        sex:'',
        country:'',
        address:'',
        state:''
    });
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
                            <input value={patient.sex} onChange={(event) => {
                                event.preventDefault();
                                setPatient({...patient, sex: event.target.value})

                            }}/>
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
                        createPatient((data) => {alert(data.firstName)}, patient);
                        props.onClose();
                        
                    }} className={"button"}>Save</button>
                </div>
            </div>
        </div>
    )
}
export default Modal;