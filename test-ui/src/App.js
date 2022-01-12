import './App.css';
import React, {useState} from "react";
import LeftLayout from "./components/leftLayout/LeftLayout";
import Modal from './components/modal/Modal';
import RightLayout from "./components/rightLayout/RightLayout";

function App() {

    const [show,setShow] = useState(false);
    const [mode,setMode] = useState('');
    const [patient, setPatient] = useState(null);
    return (
        <div className={"App"}>
            <LeftLayout setShow={setShow} reload={show} setPatient={setPatient} setMode={setMode}/>
            <RightLayout patient={patient} setShow={setShow} setMode={setMode} />
            <Modal show={show} onClose={() => setShow(false)} mode = {mode} patient= {patient}/>
        </div>

    );
}

export default App;
