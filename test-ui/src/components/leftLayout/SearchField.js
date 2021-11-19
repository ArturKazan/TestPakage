import React, {useState} from "react";

const SearchField = (props) => {
    const [filterValue, setFilterValue ] = useState("");
    const handleOnClick = (event) => {
        event.preventDefault();
        props.handleFilter(filterValue)
    }
    const handleInput = (event) => {
        event.preventDefault();
        setFilterValue(event.target.value);
    }
    return (
        <form style = {{paddingBottom:20,margin:5}}>
            <label>
                <input
                    placeholder={"Enter name"}
                    value={filterValue}
                    onChange={handleInput}
                    style={{marginRight:5, width:"70%",height:30,fontSize:16}} type="text" name="name" />
            </label>
            <input style={{width:"25%", height:30,fontSize:16,fontWeight:600}} type="submit" value="Search" onClick={handleOnClick} />
        </form>
    )
}
export default SearchField;