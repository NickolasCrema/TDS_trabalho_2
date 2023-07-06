import './NavbarButton.css';
import { useNavigate } from 'react-router-dom';


const NavbarButton = (props) => {
    const navigate = useNavigate();
    const navigateToRegister = (routePath) => {
        navigate(routePath)
    }
    return (
        <div>
            <button className='button' onClick={() => navigateToRegister(props.routePath)}>
                <span>{props.icon}</span>
                <span className='span-text'>{props.texto}</span>
            </button>
        </div>
    )
}

export default NavbarButton