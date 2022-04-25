
import React, {useState} from 'react';


const BasketItem = ({burgerData, onChangeInQuantity, onClickToDelete, id}) => {
    const {burger} = burgerData;

    const [quantity, setQuantity] = useState(burgerData.quantity);
    const [amount, setAmount] = useState(quantity * parseInt(burger.price.slice(1)));

    
    
    return (
        <div className="basketItems">
            <div id={id} className="basketItem">
                <div className="itemImage">
                    <img alt={`burger called ${burger.name}`} src={burger.image}/> 
                </div>
                <div className="itemDetails">
                    <div className='itemHeader'>
                        <span className="burgerName">{burger.name}</span>
                        <i  
                            onClick={e => onClickToDelete(e, burger.price.slice(1), quantity)} className="fas fa-trash-alt">                            
                        </i>
                    </div> 
                    <div className="itemDescription">{burger.description}</div>
                    <div className="quantitySelection flexRow">
                        <div className="changeQuantity flexRow">
                            <span 
                                className="minus" 
                                onClick={() => {
                                    if(quantity > 1){
                                        setQuantity(quantity - 1);
                                        setAmount((quantity - 1) * parseInt(burger.price.slice(1)))
                                        onChangeInQuantity(-1, burger.price.slice(1))
                                    }
                                }}>
                            <i className="far fa-minus-square"></i>        
                            </span> 
                            <span className="quantity">{quantity}</span>
                            <span 
                                onClick={() => {
                                        setQuantity(quantity + 1);
                                        setAmount((quantity + 1) * parseInt(burger.price.slice(1)))
                                        onChangeInQuantity(1, burger.price.slice(1))
                                    }
                                }>
                                <i className="far fa-plus-square"></i>
                            </span>
                        </div>
                    </div>
                    <div className="itemPrice">{`$${amount}.00`}</div>
                </div>
            </div>
            
        </div>
    );
};

export default BasketItem;