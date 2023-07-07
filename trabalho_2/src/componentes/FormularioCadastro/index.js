import './FormularioCadastro.css';
import { useNavigate } from 'react-router-dom';

const FormularioCadastro = (props) => {

    const navigate = useNavigate();
    const navigateToRegister = (routePath) => {
        navigate(routePath, {replace:true, state:{email: props.valor}})
    }

    const submit = (event, routePath) => {
        console.log(props.valor)
        navigateToRegister(routePath)
    }

    return (
        <div className='card-formulario'>
            <label>
                {props.label}
            </label>
            <section className='formulario'>
                <form onSubmit={() => navigateToRegister(props.routePath)}>
                    {props.children}
                    <button onSubmit={() => navigateToRegister(props.routePath)}>
                        {props.buttonText}
                    </button>
                </form>
            </section>

        </div>
    )
}

export default FormularioCadastro