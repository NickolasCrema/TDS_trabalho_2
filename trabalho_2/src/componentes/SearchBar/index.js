import {SearchHeart, Truck} from 'react-bootstrap-icons';

import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <div className='bottom-bar'>
            <div className='align-side-a-side'>
                <div className='align-side-a-side'>
                    <Truck size={24} className='truck'/>
                    <div className='text1'>
                        Frete Grátis.
                        <div className='text2'>
                            Compras acima de R$159,99
                        </div>
                    </div>
                </div>

                <div className='align-side-a-side'>
                    <input placeholder={props.placeholder}></input>
                    <button>
                        <SearchHeart size={24}/>

                    </button>

                </div>
            </div>
        </div>
    )
}

export default SearchBar