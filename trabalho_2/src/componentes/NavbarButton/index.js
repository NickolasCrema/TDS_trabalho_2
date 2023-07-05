import './NavbarButton.css';


const NavbarButton = (props) => {
    return (
        // <div className='div'>
            <button className='button'>
                <span>{props.icon}</span>
                <span className='span-text'>{props.texto}</span>
            </button>
        // </div>
    )
}

export default NavbarButton