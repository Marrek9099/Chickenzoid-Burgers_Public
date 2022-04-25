import React from 'react';
import BasketItem from './BasketItem';



const Basket = ({basket, quantity, amount, orderSummary, onChangeInQuantity, onClickToDelete, onClickToClearBasket}) => {


    const onClicktoClose = () => {
        orderSummary.current.classList.remove('visible');
        document.querySelector('body').classList.remove('hideOverflow');
    };

    const onClicktoOrder = () => {
        onClickToClearBasket();
        window.alert('Thank you for testing my Chickenzoid Burgers website :)');
    };

    const renderBasketItems = () => {
        if(basket.length === 0){
            return (<div>
                        <div className="emptyCart">
                            Your cart is empty
                        </div>
                    </div>
                    );
        };

        return (
            <div className="items">            
                <div className="flexRow">
                    <span>Burger(s) Added</span>
                    <span 
                        className="clearBasket" 
                        onClick={onClickToClearBasket}>
                        Clear Basket
                    </span>    
                </div> 
                <div>
                    {basket.map((burger) => <BasketItem  
                        id={burger.itemId} 
                        key={burger.itemId} 
                        onChangeInQuantity={onChangeInQuantity} 
                        burgerData={burger}  
                        onClickToDelete={onClickToDelete}
                    />
                    )}
                </div>
            </div>
        );
    };


    const renderBasketButton = () => {
        if(basket.length === 0) {
            return (
                <div>
                    <div onClick={onClicktoClose} className="button">Add burgers to the cart</div>
                </div>
            );
        };
        return (
            <div>
                <div onClick={onClicktoOrder} className="button">{`Order $${amount}.00`}</div>
            </div>
        );
    };

   
    return (
        <div className="basket">
            <div className="basketHeader">
                <div className="closeButton">
                    <i onClick={onClicktoClose} className="fas fa-times"></i>
                </div>
                <div>Your Cart</div>
                You've added {quantity} burgers
            </div>
            <div className="basketItems">
                {renderBasketItems()}
            </div>
            <div className="basketFooter">
                {renderBasketButton()}
            </div>
          
        </div>
    )
};


export default Basket;