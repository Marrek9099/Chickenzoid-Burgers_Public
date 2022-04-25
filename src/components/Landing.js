import React, {useState, useRef} from 'react'
import OnlineMenu from './OnlineMenu';
import Basket from './Basket';

let itemId = 0;

const Landing = () => {
    const [basket, updateBasket] = useState([]);
    const [amount, updateAmount] = useState(0);
    const [quantity, updateQuantity] = useState(0);
    const orderSummary = useRef('');

    const onAddToOrder = burger => {
        itemId++;
        burger.itemId = itemId;
        updateBasket([...basket, burger]);
        updateAmount(amount + (burger.burger.price.slice(1) * burger.quantity));
        updateQuantity(quantity + burger.quantity);
    };

    
    const onClickToBasket = () => {
       orderSummary.current.classList.toggle('visible')
       document.querySelector('body').classList.add('hideOverflow');
    };

    const onChangeInQuantity = (qty, price) => {
        updateQuantity(quantity + qty);
        updateAmount(amount + (qty * price));
    };

    const onClickToDelete = (event, price, qty) => {
        const itemId = event.target.parentNode.parentNode.parentNode.id;
        updateBasket(basket.filter( burger => burger.itemId !== parseInt(itemId)));
        updateAmount(amount - (price * qty));
        updateQuantity(quantity - qty);
    };

    const onClickToClearBasket = () => {
        updateBasket([]);
        updateAmount(0);
        updateQuantity(0);
    };


    return <div className="flexColumn">
                <div ref={orderSummary} className="coverContent">
                    <Basket 
                        onChangeInQuantity = {onChangeInQuantity}
                        orderSummary={orderSummary} 
                        basket={basket} 
                        quantity={quantity}
                        amount={amount}
                        onClickToDelete={onClickToDelete}
                        onClickToClearBasket={onClickToClearBasket}
                    />
                </div>
                <div className="navigation flexRow">
                    <div className="chickenzoid flexRow">
                        <i className="fas fa-hamburger"></i>
                        <div className="name">Chickenzoid Burgers</div>
                    </div>
                    <div className="navigationItems flexRow">
                        <div className="navigationItem">
                              <a href="#onlineMenu"><span className="button">Order Online</span></a>
                        </div>  
                        <div className="navigationItem">
                          <span onClick={onClickToBasket} className="button"><i className="fas fa-shopping-bag"></i>: {quantity}</span>
                        </div>
                    </div>
                </div>
                <div className="navigationAddres"><span className="name">Chickenzoid Burgers</span>  3159  Reynolds Alley Los Angeles, CA</div>
                
                <div className="landingPageImage">
                </div>
                <div className="restaurantInfo flexColumn">
                    <div>OPEN EVERYDAY:</div>
                    <div>SUN -  THU : 4 pm  - 10.30 pm / FRI-SAT : 4 pm - 11.00 pm</div>
                    <div>BRUNCH ON SATURDAY & SUNDAY:</div>
                    <div>11.30 am - 3.30 pm</div>
                </div>
                <div id="onlineMenu">
                    <OnlineMenu  onAddtoOrder = {onAddToOrder}/>
                </div>
                <div className="footer flexRow">
                    <div>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
                    <div>
                        3159  Reynolds Alley
                        <br/>
                        Los Angeles, CA
                        <br/>
                        California 90017
                        <br/>
                        Phone: 562-262-0753
                    </div>
                    <div>
                        <a href="#onlineMenu" className="button">Order Online</a>
                    </div>
                </div>
    </div>
};

export default Landing;