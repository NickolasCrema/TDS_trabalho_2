import './CampoFormulario.css';
import { useState } from 'react';


const CampoFormulario = (props) => {
    

    const onChange = (event) => {
        props.changed(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div className='campo-formulario'>
            <label>
                {props.label}
            </label>

            <input placeholder={props.placeholder} onChange={onChange} value={props.valor}>
            </input>
        </div>
    )
}

export default CampoFormulario