import Carousel from "../Carousel"
import "./NewProducts.css";

const NewProducts = () => {
    return (
        <div className="listaProdutos">
            <div className="title">Lançamentos</div>
            <Carousel/>
        </div>
    )
}

export default NewProducts