import NavbarHead from "../NavbarHead";
import SearchBar from "../SearchBar";

const Header = () => {
    return (
        <div>
            <NavbarHead />
            <SearchBar placeholder='Pesquisar...'/>
        </div>
    )
}

export default Header