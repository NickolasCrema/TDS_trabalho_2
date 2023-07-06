import './FormularioCadastro.css';

const FormularioCadastro = (props) => {

    return (
        <div className='card-formulario'>
            <label>
                {props.label}
            </label>
            <form>
                <section className='formulario'>
                    {props.children}
                </section>
            </form>
            <button>
                {props.buttonText}
            </button>

        </div>
    )
}

export default FormularioCadastro