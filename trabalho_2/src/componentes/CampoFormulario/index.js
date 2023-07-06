import './CampoFormulario.css';

const CampoFormulario = (props) => {
    return (
        <div className='campo-formulario'>
            <label>
                {props.label}
            </label>

            <input placeholder={props.placeholder}>
            </input>
        </div>
    )
}

export default CampoFormulario