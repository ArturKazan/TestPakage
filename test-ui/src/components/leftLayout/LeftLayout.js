import React, {useEffect, useState} from "react";
import PatientList from "../patientList/PatientList";
import './LeftLayout.css';
import SearchField from "./SearchField";

const LeftLayout = (props) => {

    const [filter, setFilter] = useState("");
    const handleFilter = (filterValue) => {
        setFilter(filterValue);
    }
    return(
        <div className='left'>
            <SearchField handleFilter = {handleFilter}/>
            <PatientList filter={filter} reload ={props.reload}/>
            <button style={{width:"100%",height:40}} onClick={(event) => {
                event.preventDefault();
                props.setShow(true)
            }}>Add Patient</button>
        </div>

    )
}
export default LeftLayout;