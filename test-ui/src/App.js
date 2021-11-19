import './App.css';
import React, {useState} from "react";
import LeftLayout from "./components/leftLayout/LeftLayout";
import Modal from './components/modal/Modal';
import RightLayout from "./components/rightLayout/RightLayout";

function App() {

    const [show,setShow] = useState(false);

    return (
        <div className={"App"}>
            <LeftLayout setShow={setShow} reload={show}/>
            <RightLayout/>
            <Modal show={show} onClose={() => setShow(false)}/>
        </div>

    );
}

export default App;
