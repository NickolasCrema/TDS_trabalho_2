import './Carousel.css'
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, SuitHeartFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

function Carousel() {
    const [data, setData] = useState([]);
    const carousel = useRef(null);
  
    useEffect(() => {
      fetch("http://localhost:3000/produtos.json")
        .then((response) => response.json())
        .then(setData);
    }, []);

    const navigate = useNavigate();
    const click = (evento, itemId, routePath) => {
        const item = data.find(x => x.id === itemId)
        navigate(
            routePath, 
            {
                replace:true, 
                state:{
                    id: item.id, 
                    name: item.name, 
                    size: item.size, 
                    price: item.price, 
                    newPrice: item.newPrice, 
                    image: item.image
                }
            }
        )
        
    }

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();

        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };
    
  
    if(!data || !data.length) return null;
  
    return (
        <div className='containerBlock'>
            <div className='buttons'>
                <button onClick={handleLeftClick}>
                    <ChevronLeft/>
                </button>
            </div>
            <div className="carousel" ref={carousel}>
                {data.map((item) => {
                    const{id, name, size, price, newPrice, image} = item;
                
                    return(
                        <button onClick={(evento) => click(evento, id, '/ProductDetails')}>
                            <div className="item" key={id}>
                                <div className="image">
                                    <div className='heartbtn'>
                                        <SuitHeartFill/>
                                    </div>
                                    <img src={image} alt={name}/>
                                </div> 
                                <div className="info">
                                    <span className="name" >{name}</span>
                                    <span className="size">{size}</span>
                                    <span><Star/> <Star/> <Star/> <Star/> <Star/></span>
                                    <span className="price">R${price}</span>
                                    <div className="parcel">
                                        <span className="divide">ou 2x de </span>
                                        <span className="newPrice">R${newPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    )
                    
                })}
            </div>
            <div className='buttons'>
                <button onClick={handleRightClick} className='right'>
                    <ChevronRight/>
                </button>
            </div>
        </div>
    );
    
}

export default Carousel