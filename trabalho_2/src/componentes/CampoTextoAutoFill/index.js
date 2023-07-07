import './CampoTextoAutoFill.css'
const CampoTextoAutoFill = (props) => {

    return (
        <div className='campo-formulario'>
            <label>
                {props.label}
            </label>

            <input placeholder={props.placeholder} value={props.valor}>
            </input>
        </div>
    )
}

export default CampoTextoAutoFill