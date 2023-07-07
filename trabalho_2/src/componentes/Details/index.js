import { useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Star } from 'react-bootstrap-icons';
import "./Details.css";


const Details = (props) => {

    const {state} = useLocation();
    const {id, name, size, price, newPrice, image} = state;

    return (
        <div>
            <Header/>

            <div className="containerProduct">
                
                <img src={image} className="image"/>
                
                <div className="info">
                    <h1 className="title">
                        <span className="name">{name}</span>
                    </h1>
                    <div className="productId">
                        <span className="code">Código: </span>
                        <span>#{id}</span>
                    </div>
                    <div>
                        <span className="review"><Star/> <Star/> <Star/> <Star/> <Star/></span>
                    </div>
                    <div className="detail">
                        <span className="detailTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum congue efficitur. Curabitur id erat odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce in efficitur odio. Proin quis purus urna. Nulla placerat ligula vitae nunc fringilla, nec pretium erat facilisis. Maecenas accumsan tempus mattis. Donec vel libero ac tellus dignissim dignissim. Curabitur diam ante, consectetur non lacinia eget, rhoncus eget leo. Aliquam eget porttitor lorem. Etiam hendrerit tempus enim id volutpat. In nec tellus vel neque tempus feugiat. Nunc non aliquet neque. Vestibulum at turpis sit amet est dictum placerat eget sed neque. Pellentesque lacinia ut ipsum et porttitor. Nullam egestas risus mattis luctus pretium.  </span>
                    </div>
                    <div className="size">
                        <span className="sizeTxt">Tamanho: </span>
                        <span className="sizeTxt">{size}</span>
                    </div>
                   <div> 
                        <span className="price">R${price}</span>
                        <span className="divide"> ou 2x de </span>
                        <span className="newPrice">R${newPrice}</span>
                    </div>
                    <div className="btns">
                        <button>Adicionar ao carrinho</button>
                        <button>Comprar agora</button>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
        
    )
}

export default Details