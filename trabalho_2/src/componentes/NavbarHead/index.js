import './NavbarHead.css'
import NavbarButton from "../NavbarButton";
import { Cart, Person, ChatHeart } from 'react-bootstrap-icons';
import NavbarImage from "../NavbarImage";
import SearchBar from '../SearchBar';

const NavbarHead = () => {
    return(
        <div className='navbar-head'>
            <NavbarImage />
            <SearchBar />
            <div className='options'>
                <NavbarButton icon={<Cart  size={36}/>} texto="Carrinho" />
                <NavbarButton icon={<ChatHeart size={36}/>} texto="Central de Atendimento" />
                <NavbarButton icon={<Person size={36}/>} texto='Login ou Cadastro' />
            </div>
        </div>
    )
}

export default NavbarHead