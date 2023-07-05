import {SearchHeart} from 'react-bootstrap-icons';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <div className='search-bar'>
            <section>

                <input label={props.label}></input>
                <button>
                    <SearchHeart size={24}/>
                </button>
            </section>
        </div>
    )
}

export default SearchBar