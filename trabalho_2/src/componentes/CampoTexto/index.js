import './CampoTexto.css'
const CampoTexto = (props) => {

    return (
        <div className='campo-formulario'>
            <label>
                {props.label}
            </label>

            <input placeholder={props.placeholder} type={props.type}>
            </input>
        </div>
    )
}

export default CampoTexto