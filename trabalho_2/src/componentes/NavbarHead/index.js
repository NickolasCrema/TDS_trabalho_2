import './NavbarHead.css'
import NavbarButton from "../NavbarButton";
import { House, Cart, Person, ChatHeart } from 'react-bootstrap-icons';
import NavbarImage from "../NavbarImage";

const NavbarHead = () => {
    return(
        <div className='navbar-head'>
            <NavbarImage />
            <div className='options'>
                <NavbarButton icon={<House size={36}/>} texto='Página Inicial' routePath='/'/>
                <NavbarButton icon={<Cart  size={36}/>} texto="Carrinho" />
                <button className='btn' onClick={() => { window.location.href = "http://wa.me/554599873049"; } }>
                    <NavbarButton icon={<ChatHeart size={36}/>} texto="Central de Atendimento" />
                </button>
                <NavbarButton icon={<Person size={36}/>} texto='Login ou Cadastro' routePath='/LoginOrRegister' />
            </div>
        </div>
    )
}

export default NavbarHead