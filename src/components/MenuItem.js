import React, {useRef} from 'react';
import OnlineMenuSelection from './OnlineMenuSelection';



const MenuItem = ({burger, onAddtoOrder}) => {

    const menuSelection = useRef('')
   
    const onAdd = () => {
        menuSelection.current.classList.add('visible')
        document.querySelector('body').classList.add('hideOverflow');  
    };

    
    return (
        <div className="menuItem flexRow">

            <div>
                <img alt={`burger called ${burger.name}`} src={burger.image}/>
            </div>

            <div className="menuItemDetails">

                <div className="burgerName">
                    <div>{burger.name}</div>
                </div>   


                <div>
                    <div>{burger.price}</div>
                </div>
                <div>
                    <span className="add" onClick={onAdd}>Add</span>
                </div>
            </div>
            <div className='coverContent' ref={menuSelection}>
                <OnlineMenuSelection 
                    onAddtoOrder={onAddtoOrder} 
                    menuSelection={menuSelection} 
                    burger={burger}
                />
            </div>
            
            
        </div>
    )
}

export default MenuItem;