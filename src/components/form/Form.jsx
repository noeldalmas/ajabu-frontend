import React from "react";

export const Input = ({type, label, name, placeholder})=>{

    const handleInputChange = (e)=>{
        console.log(e.target.value);
    }

    return(
        <div className='form__group'>
            <label htmlFor={name || label}>{label}</label>
            <input type={type || "text"} name={name || label} id={name || label} placeholder={placeholder} onChange={handleInputChange} />
        </div>
    )
}