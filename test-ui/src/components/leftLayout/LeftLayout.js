import React, {useState} from "react";
import PatientList from "../patientList/PatientList";
import './LeftLayout.css';
import {createPatient} from "../api";
import {findAllByLabelText} from "@testing-library/react";
import Modal from "../modal/Modal";

const LeftLayout = () => {
    //TODO: write all other props (use request out as example)
    const [patient, setPatient] = useState({
        firstName: '',
        lastName: '',
        adress: '',
        sex: 0,
    })
    const [show,setShow] = useState(false)
        return(
            <div className='left'>
            <form>
                <input onChange={(event) => {}}/>
                <button onClick={()=>setShow(true)}> New patient</button>
                <Modal onClose={()=>setShow(false)} show={show}/>
                {/*<input type="text"*/}
                {/*       value={patient.firstName}*/}
                {/*       onChange={(event) => {setPatient({...patient,firstName:event.target.value})}}*/}
                {/*       placeholder="What needs to be added?" />*/}
                {/*<input type="text"*/}
                {/*       value={patient.lastName}*/}
                {/*       onChange={(event) => {setPatient({...patient,lastName:event.target.value})}}*/}
                {/*       placeholder="What needs to be added?" />*/}
                {/*<button onClick={() => {createPatient((data) => {alert("Created!" + data.firstName)},patient)}}*/}
                {/*style={{margin:7}}>Add</button >*/}
                {/*<PatientList/>*/}
            </form>
            </div>

        )
}
export default LeftLayout;