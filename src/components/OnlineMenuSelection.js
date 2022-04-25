
import React, {useState} from 'react';



const OnlineMenuSelection = ({burger, onAddtoOrder, menuSelection}) => {
    const [quantity, setQuantity] = useState(0);
    const [amount, setAmount] = useState(0);
    
    
    const onClickToClose = () => {
        menuSelection.current.classList.remove('visible')
        document.querySelector('body').classList.remove('hideOverflow');
        setQuantity(0);
        setAmount(0);
    }

    const onClickToAdd = () => {
        if(quantity > 0){
            onAddtoOrder({burger, quantity, amount});
        };
        onClickToClose();
    }
    
    return (
        <div className="onlineMenuSelection">
            <div className="closeButton">
                <i onClick={onClickToClose} className="fas fa-times"></i>
            </div>
            <div className="burgerInfo flexRow">
                <img alt={`burger called ${burger.name}`} src={burger.image}/>
                <div>
                    <div className="burgerName">
                        <div>{burger.name}</div>
                    </div>  
                    {burger.description}
                </div>
            </div>
            <div className="quantitySelection flexRow">
                <div className="changeQuantity flexRow">
                    <span 
                        className="minus" 
                        onClick={() => {
                            if(quantity > 1){
                                setQuantity(quantity - 1);
                                setAmount((quantity - 1) * parseInt(burger.price.slice(1)))
                            }
                        }}>
                    <i className="far fa-minus-square"></i>        
                    </span> 
                    <span className="quantity">{quantity}</span>
                    <span 
                        onClick={() => {
                                setQuantity(quantity + 1);
                                setAmount((quantity + 1) * parseInt(burger.price.slice(1)))
                            }
                        }>
                        <i className="far fa-plus-square"></i>
                    </span>
                </div>
               
                <span onClick={onClickToAdd} className="add">{`Add $${amount}.00`}</span>
            </div>
        </div>
    );
};

export default OnlineMenuSelection;