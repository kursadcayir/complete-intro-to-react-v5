import React, {useState} from 'react';


const useDropDown = (label,DefaultState,opts) => {

    const [state,setState] = useState(DefaultState);
    const id = `use-dropdown${label.replace(" ","").toLowerCase()}`
    const Dropdown =  () => (
        <label htmlFor={id}>
            {label}
            <select id = {id} value = {state} 
            onChange = {e => setState(e.target.value)}
            onBlur = {e => setState(e.target.value)}
            disabled = {opts.length === 0}
            >
            <option>All</option>
            {opts.map( item  => <option key= {item}  value= {item} > {item} </option>) }
            </select>
        </label>
    ) 
    return ([state,Dropdown,setState]);
}

export default useDropDown;